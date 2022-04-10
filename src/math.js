const addNumbers = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber
}

/***
 * @apiNote : Subtracts the subtrahend from minuend. 
 * Note the result will be positive if the minuend > subtrahend, negative otherwise.
 *  
 * @param minuend
 * @param subtrahend
 */
const subtractNumber = (minuend, subtrahend) => {
    return minuend - subtrahend
}


export { subtractNumber, addNumbers as default }