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
