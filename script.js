let humanScore = 0
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
    while (humanChoice === "") {
        humanChoice = prompt('rock (1), paper (2) or scissors (3)?')
        if (humanChoice === "" || (humanChoice != null
            && !gameOptions.includes(humanChoice.toLowerCase()))
        ) {
            alert("please insert a valid choice!"); // Alert if input is empty
            humanChoice = "";
        } else {
            // humanChoice isn't null & humanChoice isn't a Number
            if (humanChoice != null && !Number.isInteger(+humanChoice)) {
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

    console.log('ROUND:', roundCount + '\n');
    console.log('Your choice was: ' + humanChoice);
    console.log('& the computers choice was: ' + computerChoice + '\n\n');

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

    alert
        (`ROUND: ${roundCount}
        Your choice was: ${humanChoice}
        & the computers choice was: ${computerChoice}

        ** ${result} **

        Score so far is >>>
            \tComputer score: ${computerScore}
            \tHuman score: ${humanScore}`
        )
}

let button = document.querySelector("button");
button.addEventListener('click', playRPS);

function playRPS() {
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

    alert
        (
            `
        ---------------------------------
        FINAL SCORE IS >>>
            \tComputer score: ${computerScore}
            \tHuman score: ${humanScore}
        `
        )
    reset();
}

function reset() {
    humanScore = 0
    computerScore = 0
    roundCount = 0
}

const buttons = document.querySelector('.playerButtons');
const rpsButtons = document.querySelectorAll('.playerButtons > button');

const resultsContainer = document.querySelector('.resultsContainer')
const buttonsContainer = document.querySelector('.buttonsContainer')
let isNextRound = false;




// Get computed style for the source element
// var computedStyle = window.getComputedStyle(buttonsContainer);

// // Retrieve the width
// var width = computedStyle.width;
// console.log(width);


// Set the width to the target element
// var targetElement = document.getElementById('targetElement');
// resultsContainer.style.width = width;



function disableRpsButtons(toggle) {
    rpsButtons.forEach(element => {
        element.disabled = toggle;
    });
}


buttons.addEventListener('click', (e) => {
    const target = e.target;
    //console.log(target.innerText);

    let testEvent = new CustomEvent('rpsChosen', {
        detail: {
            'playerChoice': target.innerText,
            'computerChoice': getComputerChoice()
        }
    })

    resultsContainer.dispatchEvent(testEvent);
});

function createElements() {
    // const createDiv = document.createElement('div');

    return {
        "resultsDiv": document.createElement('div'),
        "resultsDivLeftPanel": document.createElement('div'),
        "resultsDivRightPanel": document.createElement('div'),
        "playerPara": document.createElement('p'),
        "comupterPara": document.createElement('p'),
        "roundPara": document.createElement('p'),
        "nextRoundButton": document.createElement('button'),
        "cancelGameButton": document.createElement('button'),
    }
}

resultsContainer.addEventListener('rpsChosen', (e) => {
    let round = `ROUND: ${++roundCount}`;
    const element = createElements();

    console.log(element.resultsDivLeftPanel);

    const resultsDivLeftPanel = element.resultsDivLeftPanel;
    const resultsDivRightPanel = element.resultsDivRightPanel;
    const resultsDiv = element.resultsDiv;
    const roundPara = element.roundPara;
    const nextRoundButton = element.nextRoundButton;
    const cancelGameButton = element.cancelGameButton;
    const playerPara = element.playerPara;
    const comupterPara = element.comupterPara;

    resultsDivLeftPanel.setAttribute('class', 'resultsDivLeftPanel');
    resultsDivRightPanel.setAttribute('class', 'resultsDivRightPanel');
    resultsDiv.setAttribute('id', `r_${roundCount}`);
    resultsDiv.setAttribute('class', 'results');
    roundPara.setAttribute('style', 'display:block;')

    nextRoundButton.textContent = 'Next Round';
    cancelGameButton.textContent = 'Cancel Game';
    roundPara.innerText = round;
    playerPara.innerText = `Player selected: ${e.detail.playerChoice}`;
    comupterPara.innerText = `Computer selected: ${e.detail.computerChoice}`;

    resultsDivLeftPanel.append(playerPara, comupterPara);
    resultsDivRightPanel.append(nextRoundButton, cancelGameButton);
    resultsDiv.append(resultsDivLeftPanel, resultsDivRightPanel);
    resultsContainer.append(roundPara, resultsDiv);

    disableRpsButtons(true);
    createEventListnerForRightPanelButtons(resultsDivRightPanel)

    if (roundCount > 1 && isNextRound) {
        let r = document.getElementById(`r_${roundCount - 1}`);
        r.removeChild(r.lastChild);
    }
});

function createEventListnerForRightPanelButtons(RightPanel) {
    RightPanel.addEventListener('click', (e) => {
        let target = e.target;
        if (target.innerText == 'Next Round') {
            isNextRound = true;
            disableRpsButtons(false);
            target.style.display = 'none';
        } else {
            //alert('ARE YOU SURE YOU WANT TO CANCEL?')
            window.location.reload(true);
        }
    })
}

