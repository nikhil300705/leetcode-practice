function reverseString(str) {
  let left = 0;
  let right = str.length - 1;

  let arr = str.split('');

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  return arr.join('');
}

// Test cases
console.log(reverseString("hello"));   // "olleh"
console.log(reverseString("nikhil"));  // "lihkin"