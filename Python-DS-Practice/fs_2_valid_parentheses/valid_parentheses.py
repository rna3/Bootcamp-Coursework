def valid_parentheses(parens):
    """Are the parentheses validly balanced?

        >>> valid_parentheses("()")
        True

        >>> valid_parentheses("()()")
        True

        >>> valid_parentheses("(()())")
        True

        >>> valid_parentheses(")()")
        False

        >>> valid_parentheses("())")
        False

        >>> valid_parentheses("((())")
        False

        >>> valid_parentheses(")()(")
        False
    """

    check_valid = []

    for p in parens:
        print(f"Processing: {p}, Current stack: {check_valid}")
        if p == "(":
            check_valid.append(p)
        elif p == ")":
            if not check_valid:
                print("Mismatch found: no opening parenthesis for closing parenthesis")
                return False
            check_valid.pop()
        print(f"Stack after pop: {check_valid}")
    result = len(check_valid) == 0
    print(f"Final stack: {check_valid}, Returning: {result}")
    return result