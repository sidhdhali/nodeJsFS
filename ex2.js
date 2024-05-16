//CommonJS

// const fs = require('fs');

// fs.writeFile('example.txt', 'Hello, world!', (err) => {
//   if (err) throw err;
//   console.log('File has been created!');
// });

//ES module

import { writeFile } from 'fs/promises';

async function saveFile() {
  try {
    await writeFile('example.txt', 'Hello, world!');
    console.log('File has been saved!');
  } catch (err) {
    console.error('Error saving file:', err);
  }
}

saveFile();
