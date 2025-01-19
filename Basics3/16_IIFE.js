// Immediately Invoked Function Expressions 

//  () first parenthesis describe function defination and second () parenthesis describe function execution 

(function marco() {
    // named IIFE 
    console.log(`DB Connected`);
})();

// Simple IIFE and with parameters 
((dbname) => {
    console.log(`Server Connected ${dbname}`);
})('DYNAMO DB')