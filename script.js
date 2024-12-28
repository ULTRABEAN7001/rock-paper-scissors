let choices = ["rock", "paper", "scissors"]
let humanScore = 1;
let computerScore = 1;

function getComputerChoice(){
    let n;
    n = choices[Math.floor(Math.random()* choices.length)];
    return n
}

function getHumanChoice(){
    let d = prompt("Pick sumthn");
    return d
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.trim().toLowerCase();
    computerChoice = computerChoice.trim().toLowerCase();
    
    if (humanScore == 3 || computerScore == 3){
        return null
    }
    else if (humanScore < 3 && computerScore < 3){
        if (humanChoice == computerChoice){
            console.log("It's a tie");
        }
    
        else if ((humanChoice == "rock" && computerChoice == "paper")||(humanChoice == "paper" && computerChoice == "scissors")||(humanChoice == "scissors" && computerChoice == "rock")){
            console.log("You Lose");
            computerScore += 1;
        }
    
        else if ((humanChoice == "paper" && computerChoice == "rock")||(humanChoice == "scissors" && computerChoice == "paper")||(humanChoice == "rock" && computerChoice == "scissors")){
            console.log("You Win");
            humanScore += 1;
        }
        playRound(getHumanChoice(), getComputerChoice());
    }    
}

playRound(getHumanChoice(), getComputerChoice())

if (humanScore == 3){
    console.log("yay")
}
else if (computerScore == 3){
    console.log("nay")
}