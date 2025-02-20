// function callmyName (){
//     console.log("S");
//     console.log("A");
//     console.log("Y");
//     console.log("A");
//     console.log("K");
// }
// callmyName()

// Type 1 Write a function 

//Addition of Two Numbers
function add (num1 , num2){
    console.log(num1 + num2);
}
add(5,4)
add(1 ,"A")

// Type 2  Write a function
function minus (num1 , num2){
    let result = num1 - num2 ;
    return result
}
const result = minus(5,2)
console.log("Result Minus:" , result );

// Type 3  Write a function
function newSum (num1 , num2){
    return  num1 + num2 ;
}
const finalvalue = newSum(5,7)
console.log(finalvalue);

// Type 4 to collect data from a function 
function loginUserMessg(username) { 
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} Just Logged In`  
}
// console.log(loginUserMessg("Sayak"));
console.log(loginUserMessg());

// Functions with Arrray Inputs 

function calculateCart(num1){     
    return num1 
  } 
  console.log( calculateCart(20,30)); // Only reads first input 
  
function calculateCartPrice(...num1){     // REST OPERATOR 
  return num1 
} 
console.log( calculateCartPrice(20,30,50));

// Function with Objects
// Example 1
const user = {
    username : "Sayak",
    price : 99
}
 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
 }
 handleObject(user)

 // Example 2 
 const usernew = {
    // Empty Object 
}
 function handleObjects(newobject){
    console.log(`Username is ${newobject.username} and price is ${newobject.price}`);
 }
 handleObjects({
    username : "Soumallo",
    price : 199
 })



// CONCEPT with ARRAY 
// Pre Defined Value Array 
 const newArray = [20,30,40,50]

 function returnSecondvalue(getArray){
    return getArray[1]
 }
console.log(returnSecondvalue(newArray));



//2 Empty Array 

const onemoreArray = [] // Empty array

 function returnvalue(getArray){
    return getArray[2]
 }

console.log(returnSecondvalue([25,35,45]));