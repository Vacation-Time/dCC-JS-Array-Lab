let myNumbers = [2, 4, 6, 8];

let myNewNumbers = myNumbers.map(function(element){
  return element * 2
})

console.log(myNewNumbers)

let listOfNames = ['Rahkem','Kat','Ken']

let foundName = listOfNames.filter(function(element){
    if(element === 'Kat'){
      return true
    }else{
      return false
    }
})

console.log(foundName)

//##################################################
let dishes = [
{
  "id": 14,
  "name": "Goulash",
  "cuisine": "Hungarian",
  "servings": 15,
  "ingredients": ["beef", "tomato"]
},
]

let family = ['Stan', 'Frank', 'Lisa', 'Bobby'];
let lastName = 'Smith';

function addLastName(arrayOfNames, lastName){
  let familyFullNames = arrayOfNames.map(function(el){
    return el + ' ' + lastName;
  })
  return familyFullNames;
}

console.log(addLastName(family, lastName));
//['Stan Smith', 'Frank Smith', 'Lisa Smith', 'Bobby Smith']
