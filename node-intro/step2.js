const fs = require('fs');
const axios = require('axios');
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

async function webCat(url){
    try{
        const res = await axios.get(url);
        console.log(res.data);
    } catch (err) {
        console.error(`Error getting ${url}: ${err}`)
        process.exit(1);
    }
}

if (path.startsWith('http')) {
    webCat(path);
} else {
    cat(path);
}