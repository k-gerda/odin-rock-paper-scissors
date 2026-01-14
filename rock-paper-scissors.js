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
