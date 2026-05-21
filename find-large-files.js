import fs from 'fs';
import path from 'path';

function searchLargeFiles(currentPath, depth = 0) {
  if (depth > 5) return;
  try {
    const items = fs.readdirSync(currentPath);
    for (const item of items) {
      if (item === 'node_modules' || item === '.git') continue;
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        searchLargeFiles(fullPath, depth + 1);
      } else {
        if (stat.size > 50000) { // files larger than 50KB
          console.log(`Large file: ${fullPath} (${stat.size} bytes)`);
        }
      }
    }
  } catch (err) {
    // skip
  }
}

searchLargeFiles('/app');
