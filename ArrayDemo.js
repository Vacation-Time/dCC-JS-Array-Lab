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
