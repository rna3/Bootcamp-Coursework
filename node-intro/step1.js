const fs = require('fs');
const path = process.argv[2];

// read file and print out contents
function cat(path) {
   fs.readFile(path, 'utf8', (err,data) => {
    if(err) {
        console.error(`Error reading ${path}: ${err}`);
        process.exit(1);
    } else {
        console.log(data);
    }
   });
}

cat(path);