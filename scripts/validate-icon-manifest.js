const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const manifestPath = path.join(root, 'assets', 'icons', 'icon-manifest.json');

if (!fs.existsSync(manifestPath)) {
  console.error('Icon manifest not found:', manifestPath);
  process.exit(1);
}

let manifest;
try {
  manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
} catch (err) {
  console.error('Invalid JSON in icon-manifest.json');
  console.error(err.message);
  process.exit(1);
}

if (!Array.isArray(manifest.icons)) {
  console.error('Manifest must include an "icons" array.');
  process.exit(1);
}

const missing = [];
const duplicates = new Set();
const seenIds = new Set();

for (const icon of manifest.icons) {
  if (!icon.id || typeof icon.id !== 'string') {
    missing.push('[missing id]');
    continue;
  }

  if (seenIds.has(icon.id)) {
    duplicates.add(icon.id);
  }
  seenIds.add(icon.id);

  for (const key of ['source_svg', 'web_svg', 'email_png_1x', 'email_png_2x']) {
    if (!icon[key]) {
      missing.push(`${icon.id}: missing ${key}`);
      continue;
    }
    const filePath = path.join(root, icon[key]);
    if (!fs.existsSync(filePath)) {
      missing.push(`${icon.id}: file not found -> ${icon[key]}`);
    }
  }
}

if (duplicates.size > 0) {
  console.error('Duplicate icon ids found:', Array.from(duplicates).join(', '));
  process.exit(1);
}

if (missing.length > 0) {
  console.error('Icon manifest validation failed:');
  missing.forEach(item => console.error('-', item));
  process.exit(1);
}

console.log(`Icon manifest is valid (${manifest.icons.length} icon entries).`);
