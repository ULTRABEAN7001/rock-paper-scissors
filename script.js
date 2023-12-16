let compChoices = ["rock", "paper", "scissors"]

// This decides the cpu's choices
function getComputerChoice(choices){
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}



let playerPoints = 0;
let computerPoints = 0;

let computerSelection = getComputerChoice(compChoices);
let playerSelection;


// Player input is gathered and evaluated
function startRound(playerSelection, computerSelection){
        computerSelection = getComputerChoice(compChoices);
        playerSelection = prompt("pick something").toLowerCase();

    if (playerSelection === computerSelection){
            return "Tie, Repeat again";
    }   else if (playerSelection == "rock" && computerSelection == "paper"){
            computerPoints = computerPoints+1;
            return "You Lose! Paper beats Rock";
    }
        else if (playerSelection == "paper" && computerSelection == "scissors"){
            computerPoints = computerPoints+1;
            return "You Lose! Scissors beats Paper";
    }

        else if (playerSelection == "scissors" && computerSelection == "rock"){
            computerPoints = computerPoints+1;
            return "You Lose! Rock beats Scissors";
    }   

        else if (playerSelection == "paper" && computerSelection == "rock"){
            playerPoints = playerPoints+1;
            return "You Win! Paper beats Rock";
    }

        else if (playerSelection == "scissors" && computerSelection == "paper"){
            playerPoints = playerPoints+1;
            return "You Win! Scissors beats Paper";
    }

        else if (playerSelection == "rock" && computerSelection == "scissors"){
            playerPoints = playerPoints+1;
            return "You Win! Rock beats Scissors";
    }
        else{
            return "Nothing here";
        }
    
}



function game(){
    console.log(startRound(playerSelection, computerSelection));
    console.log(startRound(playerSelection, computerSelection));
    console.log(startRound(playerSelection, computerSelection));
    console.log(startRound(playerSelection, computerSelection));
    console.log(startRound(playerSelection, computerSelection));
}

game();

