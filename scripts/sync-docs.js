const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT, 'dist');
const DOCS_DIR = path.join(ROOT, 'docs');

if (!fs.existsSync(DIST_DIR)) {
  console.error('dist/ not found. Run `npm run build` first.');
  process.exit(1);
}

fs.rmSync(DOCS_DIR, { recursive: true, force: true });
fs.mkdirSync(DOCS_DIR, { recursive: true });
fs.cpSync(DIST_DIR, DOCS_DIR, { recursive: true });

console.log(`Synced ${DIST_DIR} -> ${DOCS_DIR}`);
