const fs = require('fs');
const path = require('path');
const stream = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
let res = '';
stream.on('data', chunk => res += chunk);
stream.on('end', () => console.log(res));
stream.on('err', err => console.log(err.message));