const user = {
    username : "sayak",
    email : "sayakghosh@google.com",

    welcomeMessage : function() {
        console.log(`${this.username} , Welcome to Website `);   // This gives current context within the scope 
    }
}
// The this keyword refers to the context where a piece of code,
// such as a function's body, is supposed to run. Most typically,
// it is used in object methods, where this refers to the object that the method is attached to,
// thus allowing the same method to be reused on different objects.

user.welcomeMessage()
user.username="sagar"
user.welcomeMessage()

