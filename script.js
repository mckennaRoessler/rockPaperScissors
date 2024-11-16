let humanScore = 0;
let computerScore = 0;

function getComputerChoice() 
{
    let computerChoice;
    let randomNum = Math.random;

    if (randomNum <= 0.33)
    {
        computerChoice = "rock";
    }
    else if (randomNum >= 0.67)
    {
        computerChoice = "paper";
    }
    else
    {
        computerChoice = "scissors";
    }

    console.log(computerChoice);
    return computerChoice;
}

function getHumanChoice()
{
    let userInput = window.prompt("Write rock, paper, or scissors.");
    
    let humanChoice = userInput.toLowerCase();

    if (!humanChoice.equals("rock") && !humanChoice.equals("paper") && !humanChoice.equals("scissors"))
    {
        console.log("Invalid input");
        getHumanChoice();
    }

    console.log(humanChoice);
    return humanChoice;
}

function playRound(humanChoice, computerChoice)
{
    if (humanChoice == computerChoice)
    {
        console.log("It's a tie!");
    }
    else if (humanChoice == "rock" && computerChoice == "paper")
    {
        console.log("You lose! Paper beats rock.");
        computerScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors")
    {
        console.log("You win! Rock beats scissors.");
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock")
    {
        console.log("You win! Paper beats rock.");
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors")
    {
        console.log("You lose! Scissors beats rock.");
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper")
    {
        console.log("You win! Scissors beats paper.");
        humanScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock")
    {
        console.log("You lose! Rock beats scissors");
        computerScore++;
    }
}

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//playRound(humanSelection, computerSelection);

function playGame()
{
    for (let i = 0; i <= 5; i++)
    {
        playRound();
    }

    if (humanScore > computerScore)
    {
        console.log("You win the game!");
    }
    else
    {
        console.log("You lose the game.");
    }
}