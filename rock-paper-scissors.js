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
   let humanChoice = prompt("Choose rock, paper or scissor!");
   if (humanChoice==="rock") {
    return "rock"
   } else if (humanChoice==="paper") {
    return "paper"
   } else if (humanChoice==="scissor") {
    return "scissor"
   } else {
    return "You entered an invalid value."
   }
}