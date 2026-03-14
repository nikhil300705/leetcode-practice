function isValid(s) {
  let stack = [];

  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    if (map[char]) {
      if (stack.pop() !== map[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

// Test example
console.log(isValid("()"));      // true
console.log(isValid("()[]{}"));  // true
console.log(isValid("(]"));      // false