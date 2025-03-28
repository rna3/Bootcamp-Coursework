"""Madlibs Stories."""


class Story:
    """Madlibs story.

    To  make a story, pass in a code, a title, a list of prompts, and the text
    of the template

        >>> s = Story(["noun", "verb"],
        ...     "I love to {verb} a good {noun}.")

    To generate text from a story, pass in a dictionary-like thing
    of {prompt: answer, prompt:answer):

        >>> ans = {"verb": "eat", "noun": "mango"}
        >>> s.generate(ans)
        'I love to eat a good mango.'
    """

    def __init__(self, code, title, words, text):
        """Create story with words and template text."""
        self.code = code
        self.title = title
        self.prompts = words
        self.template = text

    def generate(self, answers):
        """Substitute answers into text."""

        text = self.template

        for (key, val) in answers.items():
            text = text.replace("{" + key + "}", val)

        return text


# Here's a story to get you started


story = Story(
    "past_story",
    "Once Upon a Past",
    ["place", "noun", "verb", "adjective", "plural_noun"],
    """Once upon a time in a long-ago {place}, there lived a
       large {adjective} {noun}. It loved to {verb} {plural_noun}."""
)
story2 = Story(
    "future_story",
    "In the Distant Future",
    ["place", "noun", "verb",],
    """In the distant future there is a {place}. In it's shadow rests a
       beautiful {noun}. It will love to {verb} for some reason."""
)

# dictionary for story codes
stories = {s.code: s for s in [story, story2]}