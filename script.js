// make varibles to store winning combinations and choices
    const choices = ["rock", "paper", "scissors"];
    const winningCombinations = {
      rock: "paper",
      paper: "scissors",
      scissors: "rock"
    };
    let computerScore = 0;
    let playerScore = 0;

// select a random choice for computer
    function getComputerChoice(){
        let num = Math.floor(Math.random()*3);
        return choices[num];
    }

    console.log(getComputerChoice());
// capture the selection of the user
// validate the selection of the user


// pass the choices to the function playRound
// check for wins or ties
// increment the score of the winnng player
// return a statement to be logged to the console

// repeat above procedure 5 times



function playRound(playerSelection, computerSelection) {
  // your code here!
}

// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
