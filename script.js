let humanScore = 0;
let computerScore = 0;

const container = document.querySelector(".button-container");
const buttons = document.querySelectorAll("button");

console.log(playGame());

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let humanChoice = button.id;
        alert("You selected " + humanChoice);
        return humanChoice;
    });
});

function getComputerChoice() 
{
    let computerChoice;
    let randomNum = Math.random();

    if (randomNum <= 0.33)
    {
        computerChoice = "rock";if (randomNum <= 0.33)
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
    for (let i = 0; i <= 5; i++)
    {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

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