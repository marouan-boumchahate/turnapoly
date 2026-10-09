import type { IncomingMessage, ServerResponse } from 'node:http';
import crypto from 'node:crypto';
import { put, list } from '@vercel/blob';

const DEFAULT_OWNER_HASH =
  process.env.VITE_OWNER_PASSCODE_HASH ||
  '101f819cccf54441b90eac4074461a5cb544f17586b37e3b8c3b9284dce9ef25';
const OPTIONAL_PLAINTEXT_PASSCODE = process.env.VITE_OWNER_PASSCODE || '';

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
  res.setHeader('Cache-Control', 's-maxage=0, max-age=0, must-revalidate');
  res.end(JSON.stringify(data));
}

function verifyOwner(authHeader: string | undefined): boolean {
  if (!authHeader) return false;
  const token = authHeader.replace(/^Bearer\s+/i, '').trim();
  if (!token) return false;

  const isDirectHash = token === DEFAULT_OWNER_HASH;
  const isPlaintext =
    OPTIONAL_PLAINTEXT_PASSCODE !== '' && token === OPTIONAL_PLAINTEXT_PASSCODE;
  const isComputedHash =
    crypto.createHash('sha256').update(token).digest('hex') === DEFAULT_OWNER_HASH;

  return isDirectHash || isPlaintext || isComputedHash;
}

export default async function handler(
  req: IncomingMessage & { body?: unknown },
  res: JsonServerResponse
) {
  // GET: Fetch records from Vercel Blob
  if (req.method === 'GET') {
    try {
      if (!process.env.BLOB_READ_WRITE_TOKEN) {
        return sendJson(res, 200, []);
      }

      const { blobs } = await list({ prefix: 'gameRecords.json' });
      if (!blobs || blobs.length === 0) {
        return sendJson(res, 200, []);
      }

      const blobUrl = blobs[0].url;
      const remoteRes = await fetch(blobUrl, { cache: 'no-store' });
      if (!remoteRes.ok) {
        return sendJson(res, 200, []);
      }

      const records = await remoteRes.json();
      return sendJson(res, 200, records);
    } catch {
      return sendJson(res, 200, []);
    }
  }

  // POST: Save records to Vercel Blob (Owner authenticated only)
  if (req.method === 'POST') {
    const isOwner = verifyOwner(req.headers['authorization']);
    if (!isOwner) {
      return sendJson(res, 401, {
        error: 'Unauthorized: Only the application owner can save records',
      });
    }

    try {
      if (!process.env.BLOB_READ_WRITE_TOKEN) {
        return sendJson(res, 500, {
          error: 'Vercel Blob Storage is not connected. Add Blob under Storage in Vercel.',
        });
      }

      let payload = req.body;
      if (typeof payload === 'string') {
        try {
          payload = JSON.parse(payload);
        } catch {
          return sendJson(res, 400, { error: 'Invalid JSON payload' });
        }
      }

      const records = Array.isArray(payload) ? payload : (payload as { records?: unknown[] })?.records;
      if (!Array.isArray(records)) {
        return sendJson(res, 400, { error: 'Payload must be an array of records' });
      }

      const blob = await put('gameRecords.json', JSON.stringify(records, null, 2), {
        access: 'public',
        addRandomSuffix: false,
      });

      return sendJson(res, 200, {
        success: true,
        count: records.length,
        url: blob.url,
      });
    } catch {
      return sendJson(res, 500, { error: 'Failed to write to Vercel Blob' });
    }
  }

  res.statusCode = 405;
  res.end('Method Not Allowed');
}
