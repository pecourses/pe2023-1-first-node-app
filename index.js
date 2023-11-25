const os = require('os');
const fs = require('fs');

console.log(os.cpus());
console.log(os.homedir());
console.log(os.platform());

try {
  const file = fs.readFileSync('./math.js', { encoding: 'utf-8' });
  console.log(file);
} catch (err) {
  console.log('err :>> ', err);
}

// contract: "error first"
fs.readFile('./math.js', { encoding: 'utf-8' }, (err, fileData) => {
  if (err) {
    console.log('err :>> ', err);
  } else {
    console.log('fileData :>> ', fileData);
  }
});

console.log('__filename :>> ', __filename);
console.log('__dirname :>> ', __dirname);
