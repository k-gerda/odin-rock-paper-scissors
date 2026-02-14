
function getComputerChoice () {
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber===0) {
        return "rock";
    } else if (randomNumber===1) {
        return "paper";
    } else {
        return "scissor";
    }

}

function getHumanChoice () {
   let humanSelection = prompt("Select rock, paper or scissor!").toLowerCase(); 
   if (humanSelection==="rock") {
    return "rock";    
   } else if (humanSelection==="paper") {
    return "paper"
   } else if (humanSelection==="scissor") {
    return "scissor"
   } else {
    return "You entered an invalid value."
   }
}

let humanScore = 0;
let computerScore = 0;

function playGame () {
    
    let humanAnswer = getHumanChoice();
    let computerAnswer = getComputerChoice();
    playRound(humanAnswer, computerAnswer);
        
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
            console.log("Draw!")
        };
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }
    
}  

for (let i=0; i<5; i++) {
    playGame();
}

function gameOver () {
    if (humanScore > computerScore) {
        console.log("Congratulation, you win!");
    } else if (humanScore < computerScore) {
        console.log("Game over! You lose!");
    } else {
        console.log("Draw game!");
    }

}

gameOver();