"""Word Finder: finds random words from a dictionary."""


class WordFinder:
    """initialize the class with the pathway to the file"""
    def __init__(self, pathway):
        self.words = self.load_words(pathway)
    
    def load_words(self, pathway):
        """open the file in read mode and convert contents into a set
        for efficint lookup. use try except to catch an error with incorrect file paths"""
        try:
            with open(pathway, 'r') as file:
                return set(file.read().splitlines())
        except FileNotFoundError:
            print(f"Error: The file at {pathway} was not found.")
            return set()
        
    def find(self, word):
        """return true if the word is in the dictionary file """
        return word in self.words
    