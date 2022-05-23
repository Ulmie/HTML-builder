const path = require("path");
const fs = require("fs");

fs.readdir(path.resolve(__dirname, "./files-copy"), (err) => {
    if (err) {
        fs.mkdir(path.resolve(__dirname, "./files-copy"), (err) => {
            if (err) throw err;
        });
    };
    fs.readdir(path.resolve(__dirname, "./files"), (err, files) => {
        if (err) throw err;
        for(let i = 0; i < files.length; i++){
            fs.createReadStream(path.resolve(path.resolve(__dirname, "./files"), files[i])).pipe(
                fs.createWriteStream(path.resolve(path.resolve(__dirname, "./files-copy"), files[i]))
            );
        }
    });
});