const myArr = [0 ,1 ,2, 3, 4, 5, 6, 7, 8]
const myHeroines = ["sunny leone", "nora"]
const myArr2 = new Array(4,5,8)


console.log(myArr[3]);

//ARRAY METHODS
   
// myArr.push(6)
// myArr.pop(7)
// myArr.pop(8)
// myArr.unshift(9)

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

console.log(myArr);

const newArray= myArr.join() ///converts the array  to string 


console.log(myArr);
console.log(newArray);
console.log(typeof newArray);


// SLICE 
console.log("A" ,myArr);

const myn1= myArr.slice(0,3)
// printing the array with slice ops
console.log(myn1);
console.log("B" ,myArr);

// SPLICE
const myn2= myArr.splice(1,3)

console.log("C" ,myArr);
console.log(myn2);
