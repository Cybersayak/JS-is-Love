// DATES 

// let myDate = new Date ();
// // console.log(typeof myDate);
// // console.log(myDate.toString());
// // console.log(myDate.toDateString());
// // console.log(myDate.toLocaleString());

// let myCreatedDate = new Date (2023 , 1 ,14)
// let myCreatedDateTime = new Date (2023 , 7 ,14, 5 ,30, 12)

// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDateTime.toLocaleString());

// let newCreatedDate = new Date ("01-14-2024") 
// let myTimeStamp = Date.now()

// // console.log(myTimeStamp);
// // console.log (newCreatedDate.getTime());
// // console.log (newCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000)); 


let newDate = new Date
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
})
