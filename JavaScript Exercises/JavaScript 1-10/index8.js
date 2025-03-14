// Write a function that calculates the sum of an array.


function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
