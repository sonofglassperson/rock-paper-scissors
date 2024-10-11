//console.log('Testing');

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
            alert("please select a valid choice!"); // Alert if input is empty
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

    return 'No choice selected!';
}

// Test code here:
console.log(getHumanChoice())

//getHumanChoice()
