const language = ["js" ,"go" ,"cpp", "kt" ,"rb"]

const values = language.forEach( (item) => {
    //console.log(item);
   // return item 
})
// console.log(values);



const myNums=[1,2,3,4,5,6,7,8,9]

let newNum = myNums.filter( (num) => num > 3)

let halfNum = myNums.filter( (num) => {
    return num > 5
})

console.log(newNum);
console.log(halfNum);
 



const primeNums = [ 1,2,3,5,7,11,13,17,19]
const newPrime=[]

primeNums.forEach( (num) => {
    if ( num >5 ){
        newPrime.push(num)
    }
})

console.log(newPrime);

