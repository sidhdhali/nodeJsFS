//ESM

import { readFile } from 'fs/promises';

async function readFromFile() {
  try {
    const data = await readFile('test.html', 'utf8');
    console.log('File content:', data);
  } catch (error) {
    console.log('Error reading file:', error);
  }
}

readFromFile();



 
// commonjs
// const fs = require('fs');
 
// Use fs.readFile() method to read the file
// fs.readFile('demo.txt', (err, data) => {
//     console.log(data);
//  })
