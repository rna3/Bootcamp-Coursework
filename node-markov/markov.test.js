const MarkovMachine = require("./markov");

describe("MarkovMachine", () => {
  test("makes correct chains", () => {
    const mm = new MarkovMachine("the cat in the hat");
    expect(mm.chains).toEqual({
      "the": ["cat", "hat"],
      "cat": ["in"],
      "in": ["the"],
      "hat": [null]
    });
  });

  test("generates text with correct number of words", () => {
    const mm = new MarkovMachine("the cat in the hat");
    const text = mm.makeText(10);
    expect(text.split(" ").length).toBeLessThanOrEqual(10);
  });

  test("uses words from input text", () => {
    const mm = new MarkovMachine("the cat in the hat");
    const text = mm.makeText(10);
    const words = text.split(" ");
    words.forEach(word => {
      expect(mm.words).toContain(word);
    });
  });
});
