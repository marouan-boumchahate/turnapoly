import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

function recordsPersistencePlugin(): Plugin {
  return {
    name: 'records-persistence',
    configureServer(server) {
      server.middlewares.use('/api/save-records', (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const records = JSON.parse(body);
              const filePath = path.resolve(import.meta.dirname, 'src/data/gameRecords.json');
              fs.writeFileSync(filePath, JSON.stringify(records, null, 2), 'utf-8');
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true }));
            } catch {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: 'Failed to write records' }));
            }
          });
        } else {
          res.statusCode = 405;
          res.end();
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), recordsPersistencePlugin()],
  server: {
    port: 3000,
    open: false,
    host: true,
  },
});
