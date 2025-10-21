// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
    let result
    switch (operation) {
        case 'add':
        case '+':
            result = x + y
            break
        case 'subtract':
        case '-':
            result = x - y
            break
        case 'multiply':
        case '*':
            result = x * y
            break
        case 'divide':
        case '/':
            result = x / y
            break
        default:
            console.log(`Invalid input in caculate function: ${operation}`)
            return 0
    }
    return result
}

function isNotOperation(operation) {
    return (!(operation == 'add' || operation == '+' || operation == 'subtract' || operation == 'multiply' || operation == 'divide'))
}

let x, y, operation
do {
    // COLLECT FIRST NUMBER FROM USER
    x = parseFloat(prompt('Please enter the first number.'))
    // COLLECT SECOND NUMBER FROM USER
    y = parseFloat(prompt('Please enter the second number.'))
    // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    operation = prompt('Please enter which operation you want to preform. Must be add, subtract, multiply, or divde')
    if (isNotOperation(operation))
        alert('Invalid operation given, please try again')

} while (isNotOperation(operation))

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
alert(calculate(x, y, operation))