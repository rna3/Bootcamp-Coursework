const fs = require('fs');
const axios = require('axios');

//logic to determine action
let out;
let path;

if (process.argv[2] === '--out') {
    out = process.argv[3];
    path = process.argv[4];
} else {
    path = process.argv[2];
}


if (path.startsWith('http')) {
    webCat(path, out);
} else {
    cat(path, out);
}

// read file and print out contents
function cat(path, out) {
   fs.readFile(path, 'utf8', (err,data) => {
    if(err) {
        console.error(`Error reading ${path}: ${err}`);
        process.exit(1);
    } else {
        handleOutput(data, out);
    }
   });
}

async function webCat(url, out){
    try{
        const res = await axios.get(url);
        handleOutput(res.data, out);
    } catch (err) {
        console.error(`Error getting ${url}: ${err}`)
        process.exit(1);
    }
}

//handleOutput helper function
function handleOutput(data, out) {
    if (out) {
        fs.writeFile(out,data,'utf8', (err) => {
            if (err) {
                console.error(`Couldn't write to ${out}: ${err}`);
                process.exit(1);
            }
        })
    } else {
        console.log(data);
    }
}
