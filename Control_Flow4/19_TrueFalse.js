const userEmail = "sayak@ghosh.ai"
const userPassWord = []
const emptyObj = {}

if (userEmail){
    console.log("got Email");   
} else  {
    console.log("no user email");
}

if (userPassWord.length === 0){
    console.log("Array is Empty ");
}

if (Object.keys(emptyObj).length ===0){
    console.log("Objects is Empty ");
    
}

// Falsy Value
// false , 0 ,-0 , BigInt 0n , null , undefined , NaN , ""

// Truthy Values 
// "0" , 'false' , " " , [] ,{} , function(){}

// false == 0  (ans is true)
// false == '' (ans is true)
// 0 == ''     (ans is true)




// Nullish Coalescing Operator (??) : null undefined 
let val1,val2,val3 ;
val1 = 5 ?? 10 
val2 = null ?? 10
val3 = undefined ?? 15

console.log(val1);
console.log(val2);
console.log(val3);




// Ternary Operator  
// Condition ? true : false 

const foodPrice = 100
const WaterPrice = 20

foodPrice > 50 ? console.log("High Price ") : console.log("low price ");
WaterPrice >= 30 ? console.log("High Price ") : console.log("low price ");



