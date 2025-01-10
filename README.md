# Unexpected Behavior in foo function with undefined parameters

This repository demonstrates a common JavaScript error involving improper handling of undefined parameters.  The `foo` function throws an error if either `a` or `b` is `null`, but it does not explicitly check for `undefined`. This can lead to unexpected results or silent failures.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version that handles both `null` and `undefined` values gracefully.

## How to reproduce

1. Clone this repository.
2. Open `bug.js` and run the `foo` function with undefined parameters.
3. Observe the error or unexpected behavior.
4. Compare with the corrected code in `bugSolution.js`.

## Bug solution

The solution addresses the issue by checking for both `null` and `undefined` using the strict equality operator (`===`) and provides a more informative error message.