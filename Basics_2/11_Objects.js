const mySym = Symbol("key1")

const MyUser = {
    name : "Sayak",
    age : 26,
    location : "Chandigarh",
    email : "sayak@mail.com",
    isLogged : false ,
    LastLoginDays : ["Wednesday", "Sunday"],
    [mySym] : "mykey1",
}
console.log(MyUser.email);

console.log(MyUser["email"]);
console.log(MyUser[mySym]);

MyUser.location = "Haldia"


// Function 
MyUser.greeting = function() {
    console.log("Hello Mf");
    
}
console.log(MyUser.greeting); // [Function (anonymous)]


MyUser.greet = function() {
    console.log("Hello BC");
    
}
console.log(MyUser.greet()); // Value & undefined 

MyUser.greetingTwo = function() {
    console.log(`Hello Your Daddy is Back,${this.name}`);
    
}
console.log(MyUser.greetingTwo()); 


Object.freeze(MyUser) // freeze the values in objects 

console.log(MyUser);



