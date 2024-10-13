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
    const gameOptions = ['rock', 'paper', 'scissors', '1', '2', '3'];
    
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

function playRound(humanChoice, computerChoice) {
    if (++roundCount > 1) {
        console.log('\n');  
    }

    console.log('ROUND:',roundCount+'\n');
    console.log('Your choice was: ' +humanChoice);
    console.log('& the computers choice was: ' +computerChoice+'\n\n');

    let result = '';
    
    switch (humanChoice) {
        case 'rock':
            if (computerChoice == 'scissors') {
                result = "You win! Rock beats scissors";
                ++humanScore;
            } else if (computerChoice == 'paper') {
                result = "You lose! Paper beats Rock";
                ++computerScore;
            } else {
                result = "Its a draw!";
            }
            break;
        case 'paper':
            if (computerChoice == 'scissors') {
                result = "You lose! Scissors beats paper";
                ++computerScore;
            } else if (computerChoice == 'rock') {
                result = "You win! Paper beats rock";
                ++humanScore;
            } else {
                result = "Its a draw!";
            }
            break
        case 'scissors':
            if (computerChoice == 'rock') {
                result = "You lose! Rock beats scissors";
                ++computerScore;
            } else if (computerChoice == 'paper') {
                result = "You win! Scissors beats paper";
                ++humanScore;
            } else {
                result = "Its a draw!";
            }
            break
    }

    console.log(result);

    console.log('\nScore so far is >>>');
    console.log('\tComputer score:', computerScore);
    console.log('\tHuman score:', humanScore);
}



for (let index = 0; index < 5; index++) {
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()

    if (humanChoice != null) {
        playRound(humanChoice, computerChoice);
    } else {
        console.log('Game cancelled!\n\n');
        index = 5;
    }  
}
console.log('---------------------------------');
console.log('\nFINAL SCORE IS >>>');
console.log('\tComputer score:', computerScore);
console.log('\tHuman score:', humanScore);
