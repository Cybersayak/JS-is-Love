
// Question 1
// Write a function that takes a string as input and returns the reversed string.

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); 

// Output: "olleh"


