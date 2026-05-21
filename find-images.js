import fs from 'fs';
import path from 'path';

function searchDir(currentPath, depth = 0) {
  if (depth > 5) return;
  try {
    const items = fs.readdirSync(currentPath);
    for (const item of items) {
      if (item === 'node_modules' || item === '.git') continue;
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        searchDir(fullPath, depth + 1);
      } else {
        if (item.endsWith('.png') || item.endsWith('.jpg') || item.endsWith('.jpeg') || item.endsWith('.webp')) {
          console.log(`Image found: ${fullPath} (${stat.size} bytes)`);
        }
      }
    }
  } catch (err) {
    // skip errors
  }
}

console.log('Searching for images starting from /app...');
searchDir('/app');
console.log('Searching for images starting from /tmp...');
searchDir('/tmp');
console.log('Search complete.');
