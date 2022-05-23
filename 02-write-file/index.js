const { stdin, stdout, exit } = process;
const path = require('path');
const fs = require('fs');

fs.writeFile(path.join(__dirname, 'text.txt'), '', err => {
    if (err) throw err;
});
stdout.write('Input some text: \n');
stdin.on('data', (data) => {
    if (data.toString().trim() === 'exit') {
        exit();
    } else {
        fs.appendFile(path.join(__dirname, 'text.txt'), data.toString(), err => {
            if (err) throw err;
        });
    }
});

process.on('exit', () => stdout.write('Exit'));
process.on('SIGINT', () => exit());