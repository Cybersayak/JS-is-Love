const superheros = ["Chaddiman" , "Shaktimman" ,"Hanuman"]
const hero =["SuperMan" , "Batman", "SpiderMan"]

hero.push(superheros)
console.log(hero);
//OUTPUT ['SuperMan','Batman','SpiderMan', [ 'Chaddiman', 'Shaktimman', 'Hanuman' ]]

let allheros= superheros.concat(hero)
console.log(allheros);

// Spread Operator 
const newheros=[...superheros, ...hero]
console.log(newheros);


const newArray= [1,2,3,[4,5,6],7,[8,9[10,11]]];


const usableArray= newArray.flat(Infinity);
console.log(usableArray);
