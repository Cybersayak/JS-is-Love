
const newuser = new Object()

newuser.id = "14789"
newuser.name = "Sam"
newuser.isLogged = false

// Example of Objects within Objects
const user =  {
    email : "sayakmail",
    fullname : {
        userfullname : {
            firstname : "sayak",
            lastname : "ghosh"
        }
    }
}

console.log(user.fullname);
console.log(user.fullname.userfullname);
console.log(user.fullname.userfullname.firstname);
console.log(user.fullname.userfullname.lastname);

const obj1 = {
    1 : "a",
    2 : "m"
}
const obj2  = {
    3 : "g" ,
    4: "j"
}
const obj3 = {obj1 , obj2}
const obj4 = Object.assign({} , obj1 , obj2)// optional parameter {} used 
console.log(obj3);
console.log(obj4)



