// make varibles to store winning combinations and choices
    const choices = ["rock", "paper", "scissors"];
    const winningCombinations = {
      rock: "paper",
      paper: "scissors",
      scissors: "rock"
    };
    let computerScore = 0;
    let playerScore = 0;
    let round = 1

// select a random choice for computer
    function getComputerChoice(){
        let num = Math.floor(Math.random()*3);
        return choices[num];
    }

// capture the selection of the user
    function getPlayerSelection(){
      let userInput = prompt("Enter your choice (rock/paper/scissors).");
      // userInput = userInput.trim();
      return userInput.toLowerCase();
    }

// validate the selection of the user
    function validateChoice(choice){
      if(choices.indexOf(choice) === -1) return false;
      return true;
    }

// pass the choices to the function playRound
    function playRound(playerSelection, computerSelection) {
      let result = "";
      // check for wins or ties
      if(playerSelection === computerSelection){
        result = `It's a tie`;
      }else if(computerSelection === winningCombinations[playerSelection]){
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
        round++;
        // increment the score of the winnng player
        computerScore++;
      }else{
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
        round++;
        // increment the score of the winnng player
        playerScore++;
      }
      // return a statement to be logged to the console
      return result;
    }

// repeat above procedure 5 times
    function playGame(){
      while(round <= 5){
        let playerSelection = getPlayerSelection();
        let computerSelection = getComputerChoice();
        if(validateChoice(playerSelection)){
           console.log(playRound(playerSelection, computerSelection));
        }else {
            console.log("Wrong input");
            continue;
        }
      }
      console.log(`Final Score:
                        player's score: ${playerScore}
                        computer's score: ${computerScore}`);
      console.log(playerScore > computerScore ? "You Win!" : "You Lose!");
    }

    playGame();
