const path = require("path");
const fs = require("fs");

fs.readFile(path.resolve(__dirname, "./project-dist", "./bundle.css"), (err) => {
    if (err) {
        fs.writeFile(path.resolve(__dirname, "./project-dist", "./bundle.css"), '', (err) => {
            if (err) throw err;
        });
    };
    const writeStream = fs.createWriteStream(path.resolve(__dirname, "./project-dist", "./bundle.css"));
    fs.readdir(path.resolve(__dirname, "./styles"), {
        withFileTypes: true
    }, (err, files) => {
        if (err) throw err;
        for (let i = 0; i < files.length; i++) {
            if (files[i].isFile() && path.extname(files[i].name) === '.css') {
                const data = [];
                let text = fs.createReadStream(path.resolve(__dirname, './styles', files[i].name), 'utf-8');
                text.on('data', chunk => data.push(chunk));
                text.on('end', () => data.forEach(el => writeStream.write(`${el}\n`)));
            }
        }
    });
});