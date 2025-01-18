const user = {
    username : "sayak",
    email : "sayakghosh@google.com",

    welcomeMessage : function() {
        console.log(`${this.username} , Welcome to Website `);   // This gives current context within the scope 
    }
}
// The this keyword refers to the context where a piece of code,
// such as a function's body, is supposed to run. Most typically,
// it is used in object methods, where this refers to the object that the method is attached to,
// thus allowing the same method to be reused on different objects.

// user.welcomeMessage()
// user.username="sagar"
// user.welcomeMessage()

// console.log(this);

// Ex 1
// function chai() {
//     console.log(this);
// }
// chai()

// const chai = function () {
//     let username= "sayaaak"
//     console.log(this.username);
// }
// chai()  


// const chai = () => {
//     let username= "sayaaak"
//     console.log(this.username);
// }
// chai()  

// ARROW FUNCTIONS 

// Explicit 
const add = (num1 ,num2) => {
    return num1 + num2
}

console.log(add(3,4));

//Implicit Return 

//const minus= (num1 ,num2) => num1 - num2
const minus= (num1 ,num2) => (num1 - num2)
console.log(minus(4,3));


const myName = () => ({username : "sayaak"})
console.log(myName());


