
function getComputerChoice () {
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber===0) {
        return "rock";
    } else if (randomNumber===1) {
        return "paper";
    } else {
        return "scissor";
    };

};

let humanScore = 0;
let computerScore = 0;

const result = document.querySelector("#result");
const score = document.querySelector("#score");
    
function playRound (humanChoice,computerChoice) {
                  
    if (humanChoice ==="rock" && computerChoice === "scissor") {
        result.textContent = "You win! Rock beats scissor.";
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        result.textContent = "You lose! Paper beats rock.";
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        result.textContent = "You win! Paper beats rock.";
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
        result.textContent = "You lose! Scissor beats paper.";
        computerScore++;
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
        result.textContent = "You win! Scissor beats paper.";
        humanScore++;
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
        result.textContent = "You lose! Rock beats scissor.";
        computerScore++
    } else {
        result.textContent = "Draw!";
    };
    score.textContent = "Your score: " + humanScore + " Computer score: "+ computerScore;
         
};
    
const buttons = document.querySelector("#selectBtn");

buttons.addEventListener("click", (event) => {
    let target = event.target;
    switch(target.id) {
        case "Rock":
            playRound("rock", getComputerChoice());
            break;
        case "Paper":
            playRound("paper", getComputerChoice());
            break;
        case "Scissor":
            playRound("scissor", getComputerChoice());
            break;
    };

    if (humanScore == 5 || computerScore == 5) gameOver();

});

const winner = document.querySelector("#winner");
const choiceBtn = document.querySelectorAll("#selectBtn > button");

function gameOver () {
    if (humanScore > computerScore) {
        winner.textContent = "Congratulation, you win!";
    } else if (humanScore < computerScore) {
        winner.textContent = "Game over! You lose!";
    } else {
        winner.textContent = "Draw game!";
    };    
    choiceBtn.forEach(button => button.disabled = true);
    createNewGame();
        
};

function createNewGame() {

    const newGame = document.createElement("button");
    newGame.textContent = "New Game";
    const body = document.querySelector("body");
    body.appendChild(newGame);

    newGame.addEventListener("click", () => {
        choiceBtn.forEach(button => button.disabled = false);
        humanScore = 0;
        computerScore = 0;
        score.textContent = "";
        result.textContent = "";
        winner.textContent = "";
        newGame.remove();        
    });
};
