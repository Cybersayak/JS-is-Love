const myNums = [ 1,2,3]

// const myTotal = myNums.reduce( function (accumulater, currentvalue) {
//     console.log(`accumulator: ${accumulater} and currentvalue: ${currentvalue}`);
    
//     return accumulater + currentvalue
// }, 0 )

const myTotal = myNums.reduce( (acc,curr) => acc+curr, 3)

console.log(myTotal);


const shoppingCart = [
    {
        courseName : "JS Mastery",
        price : 499
    },
    {
        courseName : "Python Mastery",
        price : 399
    },
    {
        courseName : "Golang Mastery",
        price : 599
    },
]

const pricetoBuy = shoppingCart.reduce( (acc,item) => acc + item.price , 0)

console.log(pricetoBuy);
