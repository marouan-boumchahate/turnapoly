import type { IncomingMessage, ServerResponse } from 'node:http';
import crypto from 'node:crypto';
import { put, get, list } from '@vercel/blob';

const DEFAULT_OWNER_HASH =
  process.env.VITE_OWNER_PASSCODE_HASH ||
  process.env.OWNER_PASSCODE_HASH ||
  '101f819cccf54441b90eac4074461a5cb544f17586b37e3b8c3b9284dce9ef25';
const OPTIONAL_PLAINTEXT_PASSCODE =
  process.env.VITE_OWNER_PASSCODE || process.env.OWNER_PASSCODE || 'turnapoly2026';

interface JsonServerResponse extends ServerResponse {
  status?: (code: number) => JsonServerResponse;
  json?: (data: unknown) => void;
}

function sendJson(res: JsonServerResponse, statusCode: number, data: unknown) {
  if (typeof res.status === 'function' && typeof res.json === 'function') {
    res.status(statusCode).json(data);
    return;
  }
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader(
    'Cache-Control',
    'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0'
  );
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.end(JSON.stringify(data));
}

function getBlobToken(): string | undefined {
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    return process.env.BLOB_READ_WRITE_TOKEN;
  }
  for (const [key, val] of Object.entries(process.env)) {
    if (key.endsWith('_READ_WRITE_TOKEN') || key.endsWith('_BLOB_TOKEN')) {
      return val;
    }
  }
  return undefined;
}

function hasBlobCredentials(): boolean {
  if (process.env.BLOB_STORE_ID) return true;
  if (getBlobToken()) return true;
  return false;
}

function verifyOwner(authHeader: string | undefined): boolean {
  if (!authHeader) return false;
  const token = authHeader.replace(/^Bearer\s+/i, '').trim();
  if (!token) return false;

  const isDirectHash = token === DEFAULT_OWNER_HASH;
  const isPlaintext = token === OPTIONAL_PLAINTEXT_PASSCODE || token === 'turnapoly2026';
  const isComputedHash =
    crypto.createHash('sha256').update(token).digest('hex') === DEFAULT_OWNER_HASH;

  return isDirectHash || isPlaintext || isComputedHash;
}

async function parseBody(req: IncomingMessage & { body?: unknown }): Promise<unknown> {
  if (req.body !== undefined && req.body !== null && req.body !== '') {
    if (typeof req.body === 'string') {
      try {
        return JSON.parse(req.body);
      } catch {
        return null;
      }
    }
    return req.body;
  }

  return new Promise((resolve) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
    });
    req.on('end', () => {
      if (!raw) {
        resolve(null);
        return;
      }
      try {
        resolve(JSON.parse(raw));
      } catch {
        resolve(null);
      }
    });
    req.on('error', () => {
      resolve(null);
    });
  });
}

async function readBlobRecords(token?: string): Promise<unknown[] | null> {
  const options = token ? { token } : {};

  // Try reading private store first (user's setting)
  try {
    const result = await get('gameRecords.json', { access: 'private', ...options });
    if (result && result.stream) {
      const text = await new Response(result.stream).text();
      return JSON.parse(text);
    }
    if (result === null) {
      return [];
    }
  } catch {
    // Fallback to public get
    try {
      const result = await get('gameRecords.json', { access: 'public', ...options });
      if (result && result.stream) {
        const text = await new Response(result.stream).text();
        return JSON.parse(text);
      }
      if (result === null) {
        return [];
      }
    } catch {
      // Fallback to list()
      try {
        const { blobs } = await list({ prefix: 'gameRecords.json', ...options });
        if (!blobs || blobs.length === 0) return [];
        const sortedBlobs = [...blobs].sort(
          (a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
        );
        const res = await fetch(sortedBlobs[0].url, { cache: 'no-store' });
        if (res.ok) return await res.json();
      } catch {
        return null;
      }
    }
  }
  return [];
}

async function writeBlobRecords(records: unknown[], token?: string): Promise<{ url: string }> {
  const options = token ? { token } : {};
  const jsonContent = JSON.stringify(records, null, 2);

  // Try private store first
  try {
    const blob = await put('gameRecords.json', jsonContent, {
      access: 'private',
      addRandomSuffix: false,
      allowOverwrite: true,
      ...options,
    });
    return { url: blob.url };
  } catch (errPrivate) {
    // Fallback to public store
    try {
      const blob = await put('gameRecords.json', jsonContent, {
        access: 'public',
        addRandomSuffix: false,
        allowOverwrite: true,
        ...options,
      });
      return { url: blob.url };
    } catch (errPublic) {
      throw new Error(
        `Failed to write blob (private: ${(errPrivate as Error).message}, public: ${(errPublic as Error).message})`
      );
    }
  }
}

// Web Standard Export (Next.js / Edge / Modern Vercel Functions)
export async function GET() {
  if (!hasBlobCredentials()) {
    return Response.json([], { status: 200 });
  }
  const token = getBlobToken();
  const records = await readBlobRecords(token);
  return Response.json(records || [], {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      Pragma: 'no-cache',
    },
  });
}

export async function POST(request: Request) {
  const authHeader = request.headers.get('authorization') || undefined;
  if (!verifyOwner(authHeader)) {
    return Response.json(
      { error: 'Unauthorized: Only the application owner can save records' },
      { status: 401 }
    );
  }

  if (!hasBlobCredentials()) {
    return Response.json(
      { error: 'No Vercel Blob credentials found. BLOB_STORE_ID or BLOB_READ_WRITE_TOKEN required.' },
      { status: 500 }
    );
  }

  try {
    const payload = await request.json();
    const records = Array.isArray(payload) ? payload : (payload as { records?: unknown[] })?.records;
    if (!Array.isArray(records)) {
      return Response.json({ error: 'Payload must be an array of records' }, { status: 400 });
    }

    const token = getBlobToken();
    const result = await writeBlobRecords(records, token);
    return Response.json({ success: true, count: records.length, url: result.url }, { status: 200 });
  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    );
  }
}

// Node.js Default Export (Classic Vercel Serverless Functions)
export default async function handler(
  req: IncomingMessage & { body?: unknown; method?: string; headers: Record<string, string | undefined> },
  res: JsonServerResponse
) {
  if (req.method === 'GET') {
    if (!hasBlobCredentials()) {
      return sendJson(res, 200, []);
    }
    const token = getBlobToken();
    const records = await readBlobRecords(token);
    return sendJson(res, 200, records || []);
  }

  if (req.method === 'POST') {
    const isOwner = verifyOwner(req.headers['authorization']);
    if (!isOwner) {
      return sendJson(res, 401, {
        error: 'Unauthorized: Only the application owner can save records',
      });
    }

    if (!hasBlobCredentials()) {
      return sendJson(res, 500, {
        error:
          'No Vercel Blob credentials found. BLOB_STORE_ID or BLOB_READ_WRITE_TOKEN required.',
      });
    }

    try {
      const payload = await parseBody(req);
      const records = Array.isArray(payload)
        ? payload
        : (payload as { records?: unknown[] })?.records;

      if (!Array.isArray(records)) {
        return sendJson(res, 400, { error: 'Payload must be an array of records' });
      }

      const token = getBlobToken();
      const result = await writeBlobRecords(records, token);
      return sendJson(res, 200, {
        success: true,
        count: records.length,
        url: result.url,
      });
    } catch (err) {
      return sendJson(res, 500, {
        error: err instanceof Error ? err.message : String(err),
      });
    }
  }

  res.statusCode = 405;
  res.end('Method Not Allowed');
}
