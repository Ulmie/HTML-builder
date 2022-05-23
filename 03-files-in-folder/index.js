const path = require('path');
const fs = require('fs');
const { stdout } = process;

fs.readdir(path.resolve(__dirname, './secret-folder'), { withFileTypes: true }, (err, data) => {
    if (err) throw err;

    for (let i = 0; i < data.length; i++) {
        const file = `${path.resolve(__dirname, './secret-folder')}/${data[i].name}`;

        fs.stat(file, (err, item) => {
            if (err) throw err;
            if (item.isFile()) {
                const name = `${data[i].name}`.split('.')[0];
                const ext = path.extname(file).slice(1);
                const size = (item.size / 1024);

                stdout.write(`${name} - ${ext} - ${size}kb\n`);
            } else return;
        });
    }
});