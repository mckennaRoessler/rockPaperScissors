let humanScore = 0;
let computerScore = 0;

const container = document.querySelector(".button-container");
const buttons = document.querySelectorAll("button");

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

const results = document.querySelector(".results");
const playerRunningTotal = document.getElementById('player_running_total');
const computerRunningTotal = document.getElementById('computer_running_total');


//rockBtn.addEventListener('click', playRound("rock", getComputerChoice()));
//paperBtn.addEventListener('click', playRound("paper", getComputerChoice()));
//scissorsBtn.addEventListener('click', playRound("scissors", getComputerChoice()));

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let humanChoice = button.id;
        playRound(humanChoice, getComputerChoice());
        //return humanChoice;
    });
});

console.log(playGame());

function getComputerChoice() 
{
    let computerChoice;
    let randomNum = Math.random();

    if (randomNum <= 0.33)
    {
        computerChoice = "rock";
    }
    else if (randomNum <= 0.66)
    {
        computerChoice = "paper";
    }
    else
    {
        computerChoice = "scissors";
    }

    console.log("The computer chose: " + computerChoice);
    return computerChoice;
}

function getHumanChoice()
{
    let userInput = prompt("Write rock, paper, or scissors.");
    
    let humanChoice = userInput.toLowerCase();

    if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors")
    {
        console.log("Invalid input");
        return getHumanChoice();
    }

    console.log("You chose: " + humanChoice);
    return humanChoice;
}

function playRound(humanChoice, computerChoice)
{
    if (humanChoice === computerChoice)
    {
        console.log("It's a tie!");
    }
    else if (humanChoice === "rock" && computerChoice === "paper")
    {
        console.log("You lose! Paper beats rock.");
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors")
    {
        console.log("You win! Rock beats scissors.");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock")
    {
        console.log("You win! Paper beats rock.");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors")
    {
        console.log("You lose! Scissors beats paper.");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper")
    {
        console.log("You win! Scissors beats paper.");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock")
    {
        console.log("You lose! Rock beats scissors");
        computerScore++;
    }
    console.log("Scores: Computer: " + computerScore + ", Player: " + humanScore);
}

function playGame()
{
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    

    if (humanScore > computerScore)
    {
        console.log("You win the game!");
    }
    else if (humanScore < computerScore)
    {
        console.log("You lose the game.");
    }
    else 
    {
        console.log("It's a tie!");
    }
}