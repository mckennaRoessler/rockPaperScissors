let humanScore = 0;
let computerScore = 0;

const container = document.querySelector(".button-container");
const buttons = document.querySelectorAll("button");

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

const results = document.getElementsByClassName(".results");
const playerRunningTotal = document.getElementById('player_running_total');
const computerRunningTotal = document.getElementById('computer_running_total');
const winner = document.getElementById('winner');


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let humanChoice = button.id;
        playRound(humanChoice, getComputerChoice());
        //return humanChoice;
    });
});

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

    return computerChoice;
}

function getHumanChoice()
{
    if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors")
    {
        console.log("Invalid input");
        return getHumanChoice();
    }

    return humanChoice;
}

function playRound(humanChoice, computerChoice)
{
    if (humanChoice === computerChoice)
    {
        results.innerHTML = "It's a tie!";
    }
    else if (humanChoice === "rock" && computerChoice === "paper")
    {
        results.innerHTML = "You lose! Paper beats rock.";
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors")
    {
        results.innerHTML = "You win! Rock beats scissors.";
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock")
    {
        results.innerHTML = "You win! Paper beats rock.";
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors")
    {
        results.innerHTML = "You lose! Scissors beats paper.";
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper")
    {
        results.innerHTML = "You win! Scissors beats paper.";
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock")
    {
        results.innerHTML = "You lose! Rock beats scissors";
        computerScore++;
    }
    playerRunningTotal.innerHTML = "Player: " + humanScore;
    computerRunningTotal.innerHTML = "Computer: " + computerScore;
}

function playGame()
{
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    
    if (humanScore >= 5 || computerScore >= 5)
    {
        if (humanScore > computerScore)
        {
            winner.innerHTML = "You win the game!";
        }
        else if (humanScore < computerScore)
        {
            winner.innerHTML = "You lose the game.";
        }
        else 
        {
            winner.innerHTML = "It's a tie!";
        }
    }
}

playGame();