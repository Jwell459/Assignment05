//STEP 1
function halfNumber(num) {
    let half = num / 2
    console.log(`Half of ${num} is ${half}.`)
    return half
}

//STEP 2
function squareNumber(num) {
    let square = num ** 2
    console.log(`The result of squaring ${num} is ${square}.`)
    return square
}

//STEP 3
function percentOf(num1, num2) {
    let percent = (num1 / num2) * 100
    console.log(`${num1} is ${percent}% of ${num2}.`)
    return percent
}

//STEP 4
function findModulus(num1, num2) {
    let modulus = num1 % num2
    console.log(`${modulus} is the modulus of ${num1} and ${num2}.`)
    return modulus
}

//STEP 5
let halfNumInput = prompt('Please enter a number for the halfNumber function.')
halfNumber(halfNumInput)

let squareNumInput = prompt('Please enter a number for the squareNuber function.')
squareNumber(squareNumInput)

let percentInput1 = prompt('Please enter the first number for the percentOf function.')
let percentInput2 = prompt('Please enter the second number for the percentOf function.')
percentOf(percentInput1, percentInput2)

let findModulusInput1 = prompt('Please enter the first number for the findModulus function.')
let findModulusInput2 = prompt('Please enter the second number for the findModulus function.')
findModulus(findModulusInput1, findModulusInput2)
