const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Configuration
const OUTPUT_DIR = path.join(__dirname, '..', 'out');
const DIST_DIR = path.join(__dirname, '..', 'dist');
const COMPRESSION_LEVEL = 9; // Maximum compression

// Create dist directory if it doesn't exist
if (!fs.existsSync(DIST_DIR)) {
  fs.mkdirSync(DIST_DIR);
}

// Check if out directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  console.error('❌ Build output directory "out" not found. Please run "npm run build" first.');
  process.exit(1);
}

// Generate filename with timestamp
function generateFilename() {
  const now = new Date();
  const timestamp = now.toISOString()
    .replace(/[:\-T]/g, '')
    .replace(/\..+/, '')
    .slice(0, 14); // Format: YYYYMMDDHHMMSS
  return `build-${timestamp}.zip`;
}

// Main zip function
async function zipBuild() {
  const filename = generateFilename();
  const outputPath = path.join(DIST_DIR, filename);

  console.log('📦 Starting zip process...');
  console.log(`   Source: ${OUTPUT_DIR}`);
  console.log(`   Destination: ${outputPath}`);

  // Create a file to stream archive data to
  const output = fs.createWriteStream(outputPath);
  const archive = archiver('zip', {
    zlib: { level: COMPRESSION_LEVEL }
  });

  return new Promise((resolve, reject) => {
    // Handle stream events
    output.on('close', () => {
      const sizeInMB = (archive.pointer() / (1024 * 1024)).toFixed(2);
      console.log(`✅ Build successfully zipped!`);
      console.log(`   File: ${filename}`);
      console.log(`   Size: ${sizeInMB} MB`);
      console.log(`   Total bytes: ${archive.pointer().toLocaleString()}`);
      resolve();
    });

    output.on('end', () => {
      console.log('Data has been drained');
    });

    archive.on('warning', (err) => {
      if (err.code === 'ENOENT') {
        console.warn('⚠️  Warning:', err);
      } else {
        reject(err);
      }
    });

    archive.on('error', (err) => {
      reject(err);
    });

    // Pipe archive data to the file
    archive.pipe(output);

    // Add the entire out directory to the archive
    archive.directory(OUTPUT_DIR, false);

    // Finalize the archive
    archive.finalize();
  });
}

// Run the zip process
zipBuild().catch((error) => {
  console.error('❌ Error creating zip file:', error);
  process.exit(1);
});