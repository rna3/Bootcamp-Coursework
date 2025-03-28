"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """
    def __init__(self, start):
        """Initialize SerialGenerator with a start number and store the number"""
        self.current = start
        self.start = start
    
    def generate(self):
        """method to return numbers in sequence"""
        next_num = self.current
        self.current += 1
        return next_num
    
    def reset(self):
        """set the current number back to the start number"""
        self.current = self.start