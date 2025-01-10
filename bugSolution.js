function foo(a, b) {
  if (a === undefined || a === null || b === undefined || b === null) {
    throw new Error('Parameters a and b cannot be undefined or null');
  }
  // ...rest of the function
}