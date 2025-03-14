
// Question 2

// Write a function to check if a string reads the same backward as forward.


function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
