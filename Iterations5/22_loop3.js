// for of 

// ["" , "" , ""]

// [{} , {} , {}]

const arr = [1,2,3,4,5]

// for (const iterator of object ){}

// This is a for...of loop, which iterates over each character of the string greeting.
// In each iteration, the variable greet will hold one character of the string.

for (const num of arr ){
    // console.log(num);
}  

const greeting = "Good Morning"
for (const greet of greeting ) {
    // console.log(`Each char is ${greet}`);
}





// MAPS

const map = new Map()
map.set('IN' , "INDIA")
map.set('USA' ,"United States of America")
map.set('UK', "United Kingdom")
map.set('IN' , "INDIA")

// console.log(map); // Unique Entries 

for (const [key,value] of map) {
    console.log(key , ':-' ,value);
}



 
// Object is not iteratable thats why below code will not run in for of loop 

// const myObject = {
//      'dev1' : 'Vishnu',
//      'dev2' : 'MahaDev'
// }

// for (const [key ,value] of object) {
//     console.log(key ,' :-', value );
    
// }

// FOR IN LOOP for OBJECTS 

const myObject ={
    js : 'javascript',
    cpp : 'C++',
    go : 'Golang'
}

for (const key in myObject) {
    console.log(key);
    console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
    
}

// for in loop syntax

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//     }
// }


// ARRAYS 

const language = ["js" ,"go" ,"cpp", "kt" ,"rb"]

for (const key in language) {
    console.log(key);  // Keys of array is index
    console.log(language[key]);
}

 
// Map is also not iteratable so for of & for in is not possible 

