

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
const obj4 = Object.assign({} , obj1 , obj2)// optional parameter {} used as Target and other objects as source 
const obj5 = {...obj1,...obj2} // Spread 
console.log(obj3);
console.log(obj4);
console.log(obj5);

const manyuser = [
    {
        id : 1,
        name:"sayak"
    },
    {
        id : 2,
        name:"sayak"
    },
    {
        id : 3,
        name:"sayak"
    },
    {
        id : 4,
        name:"sayak"
    },

]

console.log(manyuser[1].name);

const newuser = new Object()

newuser.id = "14789"
newuser.name = "Sam"
newuser.isLogged = false

console.log(Object.keys(newuser));
console.log(Object.values(newuser));
console.log(Object.entries(newuser));

console.log(newuser.hasOwnProperty('isLogged'));


// OBJECT DESTRUCTURE 
// So, how do we extract values from more than one object property? 
// Simple – we keep adding the object keys inside the {} with commas separating them. 
// In the example below, we destructure both the coursename , 
// price and course instructor properties from the course object.
const course = {
    coursename : "ThreeJs",
    price : "499",
    courseTrainer : "Shewta"
}

const {coursename ,price ,courseTrainer:TR} = course

console.log(coursename ,price ,TR);





