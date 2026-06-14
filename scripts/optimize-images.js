import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Walk a directory and return image files
function walk(dir, exts = ['.jpg', '.jpeg', '.png']) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(full, exts));
    } else if (exts.includes(path.extname(entry.name).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

async function processImage(file) {
  const dir = path.dirname(file);
  const name = path.basename(file, path.extname(file));
  const webpOut = path.join(dir, `${name}.webp`);
  const avifOut = path.join(dir, `${name}.avif`);

  try {
    await sharp(file)
      .resize({ width: 1600, withoutEnlargement: true })
      .toFile(webpOut);
    await sharp(file)
      .resize({ width: 1600, withoutEnlargement: true })
      .toFile(avifOut);
    console.log(`Optimized: ${file} -> ${path.relative(process.cwd(), webpOut)}, ${path.relative(process.cwd(), avifOut)}`);
  } catch (err) {
    console.error('Failed to optimize', file, err);
  }
}

async function main() {
  const targets = ['public', 'src/assets', 'src/images'];
  const existing = targets.filter((t) => fs.existsSync(t));
  if (!existing.length) {
    console.log('No image folders found. Put images in `public/` or `src/assets/` to optimize.');
    return;
  }

  for (const dir of existing) {
    const imgs = walk(dir);
    for (const img of imgs) {
      await processImage(img);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
