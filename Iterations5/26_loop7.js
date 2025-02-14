// USING MAP

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//let newNums = myNumbers.map( (num) => { return num +10})

const newNums =myNumbers
                       .map((num) => num + 2)
                       .map( (num) => num + 3)
                       .filter( (num) => num >= 10 )

console.log(newNums);
