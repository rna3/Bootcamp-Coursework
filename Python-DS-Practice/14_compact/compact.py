def compact(lst):
    """Return a copy of lst with non-true elements removed.

        >>> compact([0, 1, 2, '', [], False, (), None, 'All done'])
        [1, 2, 'All done']
    """
    true_elements = []
    for item in lst:
        if item:
            true_elements.append(item) 
    return true_elements