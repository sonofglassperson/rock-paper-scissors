//console.log('Testing');

function random(max) {
    return Math.floor((Math.random() * max) + 1)
}


function getComputerChoice(params) {
   
    let rand = random(3)
    console.log(rand);
    let computerChoice = null
    // return a object in later renditions {value:rock, index:0}
    switch (rand) {
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
    return computerChoice
}

console.log(getComputerChoice())
