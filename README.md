jlschrag.github.io
==================

This is a simple converter.  It essentially does reinterpret casting between types.  So, the actual binary value stored in memory does not change, but the bits are interpeted as float, int, hex, etc.

Todo:
* OnKeyPress event - start .5 second delay.  If no other keys are pressed, fire that object's on change.  This will get rid of the need for the user to press enter to do the calculation.
* Finish adding unit tests
* add conversions for date/time to Julian (Unix) and back.
* add input validation
* add tolerance for spaces on input
* add spaces in binary & hex output
* add tolerance for 0x prefix on hex input
* add 0x on hex output
