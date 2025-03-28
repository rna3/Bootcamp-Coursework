def print_upper_words(words):
    """will print out the given list of words in all capital letters"""
    for word in words:
        print(word.upper())

print_upper_words(["hello", "hey", "goodbye", "yo", "yes"])

def print_upper_e_words(words):
    """will print out words that start with 'e' from the list in all capital letters"""
    for word in words:
        if word.lower().startswith('e'):
            print(word.upper())

print_upper_e_words(["hello", "hey", "goodbye", "yo", "earth"])

def print_upper_select_words(words, starting_letters):
    """will print out words that start with given letters from the list in all capital letters"""
    for word in words:
        for letter in starting_letters:
            if word.lower().startswith(letter.lower()):
                print(word.upper())

print_upper_select_words(["hello", "hey", "goodbye", "yo", "earth"],['h','y'])