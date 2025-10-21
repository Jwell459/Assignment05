function compChoiceRPS() {
    let compChoiceInt = Math.round(Math.random() * 2)
    let compChoiceString
    switch (compChoiceInt) {
        case 0:
            compChoiceString = 'rock'
            break
        case 1:
            compChoiceString = 'paper'
            break
        case 2:
            compChoiceString = 'scissors'
            break
    }
    return compChoiceString
}

let userChoice = prompt('Pick rock, paper, or scissors.').toLowerCase()
while (!(userChoice == 'rock' || userChoice == 'paper' || userChoice == 'scissors'))
    userChoice = prompt('Invalid input. Please type rock, paper, or scissors').toLowerCase()

let compChoice = compChoiceRPS()

if (userChoice === compChoice)
    result = "It is a tie!"
else if (userChoice == 'paper' && compChoice == 'rock' || userChoice == 'rock' && compChoice == 'scissors' || userChoice == 'scissors' && compChoice == 'paper')
    result = 'You win!'
else if (userChoice == 'rock' && compChoice == 'paper' || userChoice == 'paper' && compChoice == 'scissors' || userChoice == 'scissors' && compChoice == 'rock')
    result = 'You lose!'
else
    result = 'Unknown combination used'

alert(`You chose ${userChoice} and the computer chose ${compChoice}.\n${result}`)
