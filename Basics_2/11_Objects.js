

const MyUser = {
    name : "Sayak",
    age : 26,
    location : "Chandigarh",
    email : "sayak@mail.com",
    isLogged : false ,
    LastLoginDays : ["Wednesday", "Sunday"]
}
console.log(MyUser.email);

console.log(MyUser["email"]);

MyUser.location = "Haldia"

Object.freeze(MyUser) // freeze the values in objects 

console.log(MyUser);
