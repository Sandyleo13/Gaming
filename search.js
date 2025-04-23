import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory to start searching
const rootDir = __dirname;

// Term to search for
const searchTerm = 'lovable';

// Function to search files recursively
function searchFiles(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      searchFiles(filePath); // Recurse into subdirectories
    } else if (stat.isFile()) {
      const content = fs.readFileSync(filePath, 'utf-8');
      if (content.includes(searchTerm)) {
        console.log(`Found in: ${filePath}`);
      }
    }
  });
}

// Start searching
searchFiles(rootDir);