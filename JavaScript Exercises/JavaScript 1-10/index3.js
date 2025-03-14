// Write a function that returns the largest number in an array.


function findMax(arr) {
    return Math.max(...arr);
}

console.log(findMax([3, 7, 2, 9, 5])); // Output: 9