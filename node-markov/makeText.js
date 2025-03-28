/** Command-line tool to generate Markov text. */

const fs = require("fs");
const axios = require("axios");
const MarkovMachine = require("./markov");

/** Generate text from file */
function generateFromFile(filePath) {
    try {
      const text = fs.readFileSync(filePath, "utf8");
      const mm = new MarkovMachine(text);
      console.log(mm.makeText());
    } catch (err) {
      console.error(`Error reading file "${filePath}": ${err.message}`);
      process.exit(1);
    }
  }

/** Generate text from URL */
async function generateFromUrl(url) {
    try {
      const resp = await axios.get(url);
      const mm = new MarkovMachine(resp.data);
      console.log(mm.makeText());
    } catch (err) {
      console.error(`Error fetching URL "${url}": ${err.message}`);
      process.exit(1);
    }
  }

/** Main logic */
const [method, source] = [process.argv[2], process.argv[3]];

if (method === "file") {
  generateFromFile(source);
} else if (method === "url") {
  generateFromUrl(source);
} else {
  console.error("Unknown method. Use 'file' or 'url'.");
  process.exit(1);
}