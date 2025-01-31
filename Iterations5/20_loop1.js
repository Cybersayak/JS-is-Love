// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
    
// }

for (let index = 0; index < 10 ; index++) {
    const element = index ;
    if (element == 5) {
        // console.log("5 is Lucky Number");
        
    }
    //console.log(element);
}

for (let i = 1; i < 3   ; i++) {
    //console.log(`Outer Loop : ${i}`);
    
    for (let j = 1; j < 3 ; j++) {
      // console.log(`Inner Loop Value is ${j} and Inner Loop : ${index} `);
      // console.log(i + '*' + j + '=' + i*j );
    }
}

let myArray = [ "Vishnu" , "shiv", "MahaVir"] 
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

// break and continue 
for (let index = 1 ; index <= 20; index++) {
    if ( index == 5){
        console.log(`Detected 5 `);
        continue 
    }
    if ( index == 10){
        console.log(` Will not continue loop after 10 `);
        break
    }
    console.log(` Value of I is ${index}`);
}