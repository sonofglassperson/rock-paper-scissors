let humanScore = 0
let computerScore = 0
let roundCount = 0

function random(max) {
    return Math.floor((Math.random() * max) + 1)
}

function getChoice(num) {
    let computerChoice = '='
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

/*
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
} */


const buttons = document.querySelector('.playerButtons');
const rpsButtons = document.querySelectorAll('.playerButtons > button');
const allRpsButtons = document.querySelectorAll('.buttons button');

const resultsContainer = document.querySelector('.resultsContainer')
const buttonsContainer = document.querySelector('.buttonsContainer')
const startGameButton = document.querySelector('#startGame')

const roundsInput = document.querySelector('#roundsInput');
const subText = document.getElementById('subText');
const matchRound = document.getElementById('matchRound');
const matchResult = document.getElementById('matchResult');
const playAgainButton = document.getElementById('playAgain');
let headerText = document.querySelector('.rounds > h2');

let computerButton = null;
let playerButton = null;

let TotalNumberOfRounds = 0;
let isNextRound = false;

startGameButton.addEventListener('click', () => {
    const inputValue = +roundsInput.value;

    if (!Number.isInteger(inputValue) || inputValue <= 0) {
        alert('Please insert a number!')
    } else {
        TotalNumberOfRounds = inputValue
        disableRpsButtons(false)
        subText.style.display = 'block';
        startGameButton.disabled = true;
        // headerText.style.visibility = true;
        // headerText.setAttribute('style', " visibility: hidden;");
        headerText.innerText = `Round ${roundCount + 1}`
        console.log(headerText);
    }
});

window.addEventListener('load', () => {
    roundsInput.focus()
    subText.style.display = 'none';
    disableRpsButtons(true)
});

// Get computed style for the source element
// var computedStyle = window.getComputedStyle(buttonsContainer);

// // Retrieve the width
// var width = computedStyle.width;
// console.log(width);


// Set the width to the target element
// var targetElement = document.getElementById('targetElement');
// resultsContainer.style.width = width;



function disableRpsButtons(toggle) {
    allRpsButtons.forEach(element => {
        element.disabled = toggle;
    });
}

buttons.addEventListener('click', (e) => {
    const target = e.target;
    const computerChoice = getComputerChoice();

    let testEvent = new CustomEvent('rpsChosen', {
        detail: {
            'playerChoice': target.innerText,
            'computerChoice': computerChoice.slice(0, 1).toUpperCase() + computerChoice.slice(1)
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

function toggleSelectedButtons(p, c) {
    playerButton = document.querySelector(`.playerButtons > #${p.toLowerCase()}`)
    computerButton = document.querySelector(`.computerButtons > #${c.toLowerCase()}`)

    playerButton.classList.toggle('toggleButtonBorder')
    computerButton.classList.toggle('toggleButtonBorder')

    console.log(playerButton);
    console.log(computerButton);
}

resultsContainer.addEventListener('rpsChosen', (e) => {
    subText.style.display = 'none';
    let round = `Round: ${++roundCount}`;
    const element = createElements();
    const playerChoice = e.detail.playerChoice;
    const computerChoice = e.detail.computerChoice;
    toggleSelectedButtons(playerChoice, computerChoice)

    const resultsDivLeftPanel = element.resultsDivLeftPanel;
    const resultsDivRightPanel = element.resultsDivRightPanel;
    const resultsDiv = element.resultsDiv;
    const roundPara = element.roundPara;
    const nextRoundButton = element.nextRoundButton;
    const cancelGameButton = element.cancelGameButton;
    const playerPara = element.playerPara;
    const comupterPara = element.comupterPara;
    let gameResult = '';

    resultsDivLeftPanel.setAttribute('class', 'resultsDivLeftPanel');
    resultsDivRightPanel.setAttribute('class', 'resultsDivRightPanel');
    resultsDiv.setAttribute('id', `r_${roundCount}`);
    resultsDiv.setAttribute('class', 'results');
    roundPara.setAttribute('style', 'display:block;');

    nextRoundButton.textContent = 'Next Round';
    cancelGameButton.textContent = 'Cancel Game';
    roundPara.innerText = round;
    matchRound.innerText = roundCount == +roundsInput.value ? 'Final Round!' : round;
    console.log(roundCount, +roundsInput.value);

    matchRound.setAttribute('style', 'font-weight:500');

    playerPara.innerText = `Player selected: ${playerChoice}`;
    comupterPara.innerText = `Computer selected: ${computerChoice}`;
    gameResult = playRpsRoundUI(playerChoice, computerChoice);
    matchResult.innerText = gameResult;
    const isFinalRound = roundCount == +roundsInput.value;
    const gameOverResultText = document.getElementById('gameOverResult');

    if (isFinalRound) {
        headerText.innerText = 'Game Over!';
        matchRound.innerText = 'Final Round!';
        matchResult.innerText = gameResult.indexOf('draw') > 0 ? gameResult : gameResult.slice(gameResult.indexOf('!') + 2);
        document.getElementById('gameOver').innerText = gameOverResult(humanScore, computerScore).result;
        gameOverResultText.innerText = gameOverResult(humanScore, computerScore).overallResult;
        gameOverResultText.setAttribute('style', 'font-weight:500');
        playAgainButton.style.visibility = "visible";
    }

    resultsDivLeftPanel.append(playerPara, comupterPara);
    resultsDivRightPanel.append(nextRoundButton, cancelGameButton);

    if (isFinalRound) {
        resultsDiv.append(resultsDivLeftPanel);
    } else {
        resultsDiv.append(resultsDivLeftPanel, resultsDivRightPanel);
    }

    resultsContainer.append(roundPara, resultsDiv);
    disableRpsButtons(true);
    createEventListnerForRightPanelButtons(resultsDivRightPanel)

    if (roundCount > 1 && isNextRound) {
        const r = document.getElementById(`r_${roundCount - 1}`);
        r.removeChild(r.lastChild);
    }

    let playerScoreText = document.getElementById('playerScore');
    let computerScoreText = document.getElementById('computerScore');

    playerScoreText.innerText = humanScore;
    computerScoreText.innerText = computerScore;
});

function createEventListnerForRightPanelButtons(RightPanel) {
    RightPanel.addEventListener('click', (e) => {
        let target = e.target;
        if (target.innerText == 'Next Round') {
            isNextRound = true;
            disableRpsButtons(false);
            target.style.display = 'none';
            subText.style.display = 'block';
            playerButton.classList.toggle('toggleButtonBorder');
            computerButton.classList.toggle('toggleButtonBorder');
            matchRound.innerText = '';
            matchResult.innerText = '';
            headerText.innerText = `Round ${roundCount + 1}`
        } else {
            //alert('ARE YOU SURE YOU WANT TO CANCEL?')
            window.location.reload(true);
        }
    })
}

function playRpsRoundUI(humanChoice, computerChoice) {
    let result = '';
    computerChoice = computerChoice.toLowerCase();

    switch (humanChoice.toLowerCase()) {
        case 'rock':
            if (computerChoice == 'scissors') {
                result = "You win! Rock beats scissors.";
                ++humanScore;
            } else if (computerChoice == 'paper') {
                result = "You lose! Paper beats Rock.";
                ++computerScore;
            } else {
                result = "Its a draw.";
            }
            break;
        case 'paper':
            if (computerChoice == 'scissors') {
                result = "You lose! Scissors beats paper.";
                ++computerScore;
            } else if (computerChoice == 'rock') {
                result = "You win! Paper beats rock.";
                ++humanScore;
            } else {
                result = `It's a draw.`;
            }
            break
        case 'scissors':
            if (computerChoice == 'rock') {
                result = "You lose! Rock beats scissors.";
                ++computerScore;
            } else if (computerChoice == 'paper') {
                result = "You win! Scissors beats paper.";
                ++humanScore;
            } else {
                result = "Its a draw.";
            }
            break
    }
    return result;
}

function gameOverResult(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return {
            'result': 'Player beat Computer',
            'overallResult': 'You Win!'
        }
    } else if (playerScore < computerScore) {
        return {
            'result': 'Computer beat Player',
            'overallResult': 'You Lose!'
        }
    }
    return {
        'result': 'No winner declared',
        'overallResult': `It's a tie!`
    }
}


playAgainButton.addEventListener('click', function () {
    window.location.reload(true);
})