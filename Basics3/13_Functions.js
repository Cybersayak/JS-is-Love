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

