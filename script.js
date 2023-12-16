let compChoices = ["Rock", "Paper", "Scissors"]

function getComputerChoice(choices){
    let choice = Math.floor(Math.random() * choices.length);
    console.log(choices[choice]);
}

getComputerChoice(compChoices);