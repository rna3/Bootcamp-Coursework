def reverse_vowels(s):
    """Reverse vowels in a string.

    Characters which re not vowels do not change position in string, but all
    vowels (y is not a vowel), should reverse their order.

    >>> reverse_vowels("Hello!")
    'Holle!'

    >>> reverse_vowels("Tomatoes")
    'Temotaos'

    >>> reverse_vowels("Reverse Vowels In A String")
    'RivArsI Vewols en e Streng'

    reverse_vowels("aeiou")
    'uoiea'

    reverse_vowels("why try, shy fly?")
    'why try, shy fly?''
    """
    vowels = set("aeiouAEIOU")

    original_vowels = [char for char in s if char in vowels]

    s_list= list(s)

    reversed_vowels = original_vowels[::-1]

    reversed_vowels_iter = iter(reversed_vowels)

    for i, char in enumerate(s_list):
        if char in vowels:
            s_list[i] = next(reversed_vowels_iter)
    
    return ''.join(s_list)
