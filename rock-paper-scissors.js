// Create a new function named getComputerChoice.
// getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
    
    // Generate random numbers between 0 and 2. 
    // Round them down to integers.

let randomNumber = Math.floor(Math.random()*3);

    // If the current number is 0 return rock.
    // If the current number is 1 return paper.
    // If the current number is 2 return scissor.

function getComputerChoice () {
    if (randomNumber===0) {
        return "rock";
    } else if (randomNumber===1) {
        return "paper";
    } else {
        return "scissor";
    }

}

// Write a function that takes the user choice and returns it.
    // Create a new function named getHumanChoice.
    // Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.

function getHumanChoice () {
   let humanSelection = prompt("Select rock, paper or scissor!").toLowerCase(); // Make it case-insensitive.
   if (humanSelection==="rock") {
    return "rock"
   } else if (humanSelection==="paper") {
    return "paper"
   } else if (humanSelection==="scissor") {
    return "scissor"
   } else {
    return "You entered an invalid value."
   }
}

// Write variables to keep track of the players score.
    // Create two new variables named humanScore and computerScore in the global scope.
    // Initialize those variables with the value of 0.

let humanScore = 0;
let computerScore = 0;

// Write the logic to play a single round.
    // Create a new function named playRound.
    // Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
    // Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
    // Increment the humanScore or computerScore variable based on the round winner.

function playRound (humanChoice,computerChoice) {

    if (humanChoice ==="rock" && computerChoice === "scissor") {
        console.log("You win! Rock beats scissor.")
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock.")
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock.")
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
        console.log("You lose! Scissor beats paper.")
        computerScore++;
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
        console.log("You win! Scissor beats paper.")
        humanScore++;
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissor.")
        computerScore++
    } else {
        console.log("Drawn game!")
    }
}

let humanAnswer = getHumanChoice();
let computerAnswer = getComputerChoice();

playRound(humanAnswer,computerAnswer);
