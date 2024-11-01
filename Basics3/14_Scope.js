// Example 1

if (true) {
    let a =5
    const b = 4
    var c =6
}

// console.log(a);      // A is local scope {} , Expected error 
// console.log(b);      // B is local scope {} , expected error 
console.log(c);     //  var is taken as global scope 



// Example 2 

var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 2


// NESTED SCOPE  - Child Function can access the variable of Parent Function 

function one(){
    const username = "sayak"

    function two (){
        const website = "peerlist"  // Local Scope 
        console.log(username)
    }

    // console.log(website);
    
    two()
}
one()


// ++++++++++++++++ INTERSTING TOPICS ++++++++++++++++++++++

console.log(addoane(7)); // Expected Output 8 

function addoane(num){
return num + 1 
}

// We cant log the fucntion before declaration if we hold it in a Variable , for more refer Hoisting 
const addTwo = function (n){    // Expression 
  return n + 2
}
addTwo(5)
