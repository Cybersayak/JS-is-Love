// NUMBERS 

const score = 400 // Automatically defined as number 
console.log(score);

const balance = new Number(500) // Specially declared as number 
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const newscore = 25.899
console.log(newscore.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN"));         // Check MDN , Used to segregate according Indian Number System i.e India uses thousands/lakh/crore separators





// MATHS 

console.log(Math.abs(-4));  // The Math.abs() static method returns the absolute value of a number.
console.log(Math.round(7.5)); // Method thats round of the number 
console.log(Math.ceil(6.1)); // If > 6 , if may be 6.1 ,6.2 anything print 8 
console.log(Math.floor(8.9)) ; 


console.log(Math.random());
console.log(Math.random()* 10);
console.log(Math.floor(Math.random()* 10));

const min = 10 
const max = 20

console.log(Math.floor(Math.random()* (max -min + 1) + min ));


