const language = ["js" ,"go" ,"cpp", "kt" ,"rb"]
const frameworks = ["react", "Gin" ,"Crow" ,"Compose", "Rails"]

// language.forEach( function (item) {
//     console.log(item);
// })

language.forEach( (item) => {
    // console.log(item); 
})

language.forEach( (index,array) => {
    // console.log(index, array); 
})



function printMe(item){
    // console.log(item);
}

frameworks.forEach(printMe);


// Array of Objects 

const cloud = [
    {
        cloudName: "AWS",
        companyName: "Amazon"
    },
    {
        cloudName: "Azure",
        companyName: "Microsoft"
    },
    {
        cloudName: "GCP",
        companyName: "Google"
    }
]

cloud.forEach( (value) => {
    console.log(value.cloudName);
    //console.log(value.companyName);
})