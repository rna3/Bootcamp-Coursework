/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    this.chains = {}

    for (let i = 0; i < this.words.length; i++) {
      const word = this.words[i];
      const nextWord = this.words[i+1] || null;

      if (!this.chains[word]) {
        this.chains[word]= [];
      }

      this.chains[word].push(nextWord)
    }
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  const keys = Object.keys(this.chains);
  let key = keys[Math.floor(Math.random() * keys.length)];
  let result = [];

  for (let i = 0; i < numWords; i++) {
    result.push(key);
    const nextWords = this.chains[key];

    if (!nextWords || nextWords.length === 0) break;

    key = nextWords[Math.floor(Math.random() * nextWords.length)];
    if (key === null) break;
  }

  return result.join(" ");
  }
}


// Export the class
module.exports = MarkovMachine;