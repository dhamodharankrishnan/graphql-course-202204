import myCurrentLocation, { message, name, getGreeting } from './myModule'
import addGivenNumbers, { subtractNumber } from './math'


console.log('Hello GraphQL!')
console.log(message)
console.log(name)
console.log( myCurrentLocation )

console.log(getGreeting('Dhamo'))
console.log(addGivenNumbers(10, 5 ))
console.log(subtractNumber(10, 5))