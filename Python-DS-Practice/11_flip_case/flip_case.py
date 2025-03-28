def flip_case(phrase, to_swap):
    """Flip [to_swap] case each time it appears in phrase.

        >>> flip_case('Aaaahhh', 'a')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'A')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'h')
        'AaaaHHH'

    """
    
    # result = ''

    # for letter in phrase:
    #     if letter == to_swap.lower():
    #         result += (letter.swapcase()) 
    #     elif letter == to_swap.upper():
    #         result += (letter.swapcase()) 
    #     else:
    #         result += letter
    # return result

    to_swap = to_swap.lower()
    
    swapped_char = [
        (char.swapcase() if char.lower() == to_swap else char)
        for char in phrase
    ]
    
    return "".join(swapped_char)

       


       