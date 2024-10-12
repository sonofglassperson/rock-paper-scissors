//console.log('Testing');


let humanScore= 0
let computerScore = 0
let roundCount = 0

function random(max) {
    return Math.floor((Math.random() * max) + 1)
}

function getChoice(num) {
    let computerChoice = null
    switch (num) {
        case 1:
            computerChoice = 'rock'
            break;
        case 2:
            computerChoice = 'paper'
            break;
        case 3:
            computerChoice = 'scissors'
            break;
    }
    return computerChoice;
}


function getComputerChoice() {
    let rand = random(3)
    // return a object in later renditions {value:rock, index:0}
    return getChoice(rand)
}

function getHumanChoice() {
    let humanChoice = "";
    let gameOptions = ['rock', 'paper', 'scissors', '1', '2', '3'];
    
    // read while like if
    // if the condition is true, run code till it is false
    while (humanChoice === "") { // 
        humanChoice = prompt('rock (1), paper (2) or scissors (3)?')
        if (humanChoice === "" || (humanChoice != null 
                && ! gameOptions.includes(humanChoice.toLowerCase()))
        ) {
            alert("please insert a valid choice!"); // Alert if input is empty
            humanChoice = "";
        } else {
            // humanChoice isn't null & humanChoice isn't a Number
            if (humanChoice != null && ! Number.isInteger(+humanChoice)) {
                return humanChoice.toLowerCase()
            } else if (humanChoice != null) {
                return getChoice(+humanChoice); 
            }
        }
    }
    return null;
}


// Test code here:
// humanScore++
// console.log(humanScore);
// console.log(computerScore);

function playRound(humanChoice, computerChoice) {
    console.log('ROUND:',++roundCount+'\n');
    
    console.log('Your choice was: ' +humanChoice);
    console.log('& the computers choice was: ' +computerChoice+'\n\n');
    
    switch (humanChoice) {
        // rock beats scissors1
        // paper beats rock
        // rock && rock
        case 'rock':
            if (computerChoice == 'scissors') {
                console.log("You win! Rock beats scissors");
                ++humanScore;
            } else if (computerChoice == 'paper') {
                console.log("You lose! Paper beats Rock");
                ++computerScore;
            } else {
                console.log("Its a draw!");
            }
            break;
        case 'paper':
            if (computerChoice == 'scissors') {
                console.log("You lose! Scissors beats paper");
                ++computerScore;
            } else if (computerChoice == 'rock') {
                console.log("You win! Paper beats rock");
                ++humanScore;
            } else {
                console.log("Its a draw!");
            }
            break
        case 'scissors':
            if (computerChoice == 'rock') {
                console.log("You lose! Rock beats scissors");
                ++computerScore;
            } else if (computerChoice == 'paper') {
                console.log("You win! Scissors beats paper");
                ++humanScore;
            } else {
                console.log("Its a draw!");
            }
            break
    }

    //console.log(result);

    console.log('\nScore so far is >>>');
    console.log('\tComputer score:', computerScore);
    console.log('\tHuman score:', humanScore);
    
}

let humanChoice = getHumanChoice()
let computerChoice = getComputerChoice()

if (humanChoice != null) {
    playRound(humanChoice, computerChoice);
} else {
    console.log('No choice selected!');
}


//console.log(getHumanChoice())

//getHumanChoice()
