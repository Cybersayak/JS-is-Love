let myhomename= "Sayak"

let asname=myhomename
asname = "Sakku Bhaiya"

console.log(myhomename);
console.log(asname);
// in the above example the primitive values the stored in stack and just give copy of the variable not the exact value 

// Example of Heap Memory in which variable 2 directly refers the value from variable 1 
let userSayak = {
    email: "sayak@gmail.com",
    upi : "sayak@ybl"
}
let userTwo = userSayak

userTwo.email = "ghosh@gmail.com"

console.log(userSayak.email);
console.log(userTwo.email);
