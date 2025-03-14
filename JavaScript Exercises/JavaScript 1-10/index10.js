// Given an array of `n` unique numbers from `1` to `n+1`, find the missing number.

function findMissingNumber(arr) {
    let n = arr.length + 1;
    let sum = (n * (n + 1)) / 2; // Sum of first n natural numbers
    let arrSum = arr.reduce((acc, num) => acc + num, 0);
    return sum - arrSum;
}

console.log(findMissingNumber([1, 2, 4, 5, 6])); // Output: 3