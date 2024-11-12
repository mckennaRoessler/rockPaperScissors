console.log("Hello world");

function getComputerChoice() 
{
    let computerChoice = "";
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
    
    return computerChoice;
}

function getHumanChoice()
{

}