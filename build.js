const mjml = require('mjml');
const fs = require('fs');
const path = require('path');

const TEMPLATES_DIR = path.join(__dirname, 'src', 'templates');
const DIST_DIR = path.join(__dirname, 'dist');
const ASSETS_DIR = path.join(__dirname, 'assets');
const DIST_ASSETS_DIR = path.join(DIST_DIR, 'assets');
const STATIC_DIR = path.join(__dirname, 'static');

// Ensure dist directory exists
if (!fs.existsSync(DIST_DIR)) {
  fs.mkdirSync(DIST_DIR, { recursive: true });
}

// Copy static assets so local preview can load logos/images from dist/
if (fs.existsSync(ASSETS_DIR)) {
  fs.cpSync(ASSETS_DIR, DIST_ASSETS_DIR, { recursive: true, force: true });
}

// Copy static preview shell files (index/preview pages)
if (fs.existsSync(STATIC_DIR)) {
  fs.cpSync(STATIC_DIR, DIST_DIR, { recursive: true, force: true });
}

// Get all .mjml files in templates directory
const templates = fs.readdirSync(TEMPLATES_DIR).filter(f => f.endsWith('.mjml'));

if (templates.length === 0) {
  console.log('⚠️  No .mjml templates found in src/templates/');
  process.exit(0);
}

console.log(`\n🔨 Building ${templates.length} email template(s)...\n`);

let hasErrors = false;

templates.forEach(template => {
  const inputPath = path.join(TEMPLATES_DIR, template);
  const outputName = template.replace('.mjml', '.html');
  const outputPath = path.join(DIST_DIR, outputName);

  try {
    const mjmlContent = fs.readFileSync(inputPath, 'utf8');

    const result = mjml(mjmlContent, {
      filePath: inputPath,           // Required for mj-include to resolve relative paths
      minify: false,                  // Keep readable for debugging
      validationLevel: 'soft',        // Don't crash on non-critical issues
      keepComments: false,            // Clean output
    });

    // Log any warnings
    if (result.errors && result.errors.length > 0) {
      console.log(`  ⚠️  ${outputName} — compiled with ${result.errors.length} warning(s):`);
      result.errors.forEach(err => {
        console.log(`      └─ ${err.formattedMessage || err.message}`);
      });
    } else {
      console.log(`  ✅ ${outputName}`);
    }

    // Write the output HTML
    fs.writeFileSync(outputPath, result.html);

  } catch (err) {
    hasErrors = true;
    console.error(`  ❌ ${outputName} — FAILED:`);
    console.error(`      └─ ${err.message}`);
  }
});

console.log(`\n📦 Output: ${DIST_DIR}/`);

if (hasErrors) {
  console.log('⚠️  Some templates had errors. Check the output above.\n');
  process.exit(1);
} else {
  console.log('✨ All templates built successfully!\n');
}
