// make varibles to store winning combinations and choices
    const choices = ["rock", "paper", "scissors"];
    const winningCombinations = {
      rock: "paper",
      paper: "scissors",
      scissors: "rock"
    };
    let computerScore = 0;
    let playerScore = 0;

    /////////// DOM MANIPULATION //////////////////

    let buttons = document.querySelectorAll(".game");
    let resultDiv = document.querySelector(".result-container");
    let paras = resultDiv.querySelectorAll("p");
    let coverButton = document.querySelector(".cover button");

    coverButton.addEventListener("click",function(e){
        e.target.parentElement.style.display = "none";
    });

    buttons.forEach(button => {
        button.addEventListener("click",playGame);
    });

// select a random choice for computer
    function getComputerChoice(){
        let num = Math.floor(Math.random()*3);
        return choices[num];
    }
    
//  NOT REQUIRED ANYMORE AS INPUT CAPTURED AS BUTTON CLICK NOT TEXT
// // capture the selection of the user
//     function getPlayerSelection(){
//       let userInput = prompt("Enter your choice (rock/paper/scissors).");
//       return userInput.toLowerCase();
//     }
//
// // validate the selection of the user
//     function validateChoice(choice){
//       if(choices.indexOf(choice) === -1) return false;
//       return true;
//     }

// pass the choices to the function playRound
    function playRound(playerSelection, computerSelection) {
      let result = "";
      // check for wins or ties
      if(playerSelection === computerSelection){
        result = `It's a tie`;
      }else if(computerSelection === winningCombinations[playerSelection]){
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
        // increment the score of the winnng player
        computerScore++;
      }else{
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
        // increment the score of the winnng player
        playerScore++;
      }
      // return a statement to be logged to the console
      return result;
    }

// repeat above procedure 5 times
    function playGame(e){

            let playerSelection = e.target.id;
            let computerSelection = getComputerChoice();
            let result = playRound(playerSelection, computerSelection)

            paras[0].textContent = `Your Score: ${playerScore}`;
            paras[1].textContent = `Computer Score: ${computerScore}`;
            paras[2].textContent = `${result}`;

            if(playerScore === 5 || computerScore ===5){
                let finalResult = " Match over: ";
                finalResult += playerScore > computerScore ? "You Win!": "You Lose!";
                let p = document.createElement("p");
                p.appendChild(document.createTextNode(`${finalResult}`));
                resultDiv.appendChild(p);
            }
    }
