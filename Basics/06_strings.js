const name = "Sayak"   // String delaration process 1 
const surname = new String('Ghosh')  // String delaration process 2 

console.log("Mr" + name + surname );  // String Concatenation but dont use this process

console.log(`hello my name is ${name} and surname is ${surname}`)//String Interpolation  , back ticks help to use "" & '' 

console.log(surname[0],surname[1],surname[2],surname[3],surname[4]); // string is like a object here with key value pairs 
console.log(surname.__proto__);
console.log(surname.length);
console.log(surname.toUpperCase);// methods of string 
console.log(surname.toLowerCase);
console.log(surname.charAt(0));
console.log(surname.indexOf('h'));1 




const newString = "   Sagar    "
console.log(newString);
console.log(newString.trim());// remove the spaces from the string value , trimStart & trimEnd    

const url = "chaiaurcode.com/java%20script"
console.log(url.replace('%20','-'));   // replace method ,like .replace we can use  
console.log(url.includes('java'));    // .includes('') for searching element in the string, present or not that return true or false 

const fullName = new String('mr-sayak-ghosh')

const anewString= fullName.substring(0,10)
console.log(anewString);

// const aureknewString= fullName.slice(-5, 5)
// console.log(aureknewString);

console.log(fullName.split('-'));

