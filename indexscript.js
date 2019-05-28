var options = ['rock', 'paper', 'scissors'];
var userChoice;
var computerChoice;
var choices = document.getElementsByClassName("choice");//returns array



for(var i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", function () {
    userChoice = this.id
    computerChoice = options[Math.floor(Math.random() * options.length)]
    console.log("User choice is: " + userChoice);
    console.log("Computer choice is: " + computerChoice);
          
    if (userChoice == 'rock') {
      if (computerChoice == 'paper'){
        document.getElementById("userChoice").innerHTML = `Your choice is ${userChoice}`;
        document.getElementById("computerChoice").innerHTML = `Computer choice is ${computerChoice}`;
        document.getElementById("message").innerHTML = "Computer Wins!";  

      }else if (computerChoice == 'scissors'){
        document.getElementById("userChoice").innerHTML = `Your choice is ${userChoice}`;
        document.getElementById("computerChoice").innerHTML = `Computer choice is ${computerChoice}`;
        document.getElementById("message").innerHTML = "You win!";
        
      }else if (userChoice == computerChoice){
      document.getElementById("userChoice").innerHTML = `Your choice is ${userChoice}`;
      document.getElementById("computerChoice").innerHTML = `Computer choice is also ${computerChoice}`;
      document.getElementById("message").innerHTML = "Tie!";
      }
    }
    
    else if (userChoice == 'paper') {
      if (computerChoice == 'scissors'){
        document.getElementById("userChoice").innerHTML = `Your choice is ${userChoice}`;
        document.getElementById("computerChoice").innerHTML = `Computer choice is ${computerChoice}`;
        document.getElementById("message").innerHTML = "Computer Wins!";
        
      }else if (computerChoice == 'rock'){
        document.getElementById("userChoice").innerHTML = `Your choice is ${userChoice}`;
        document.getElementById("computerChoice").innerHTML = `Computer choice is ${computerChoice}`;
        document.getElementById("message").innerHTML = "You win!";
        
      }else if (userChoice == computerChoice){
      document.getElementById("userChoice").innerHTML = `Your choice is ${userChoice}`;
      document.getElementById("computerChoice").innerHTML = `Computer choice is ${computerChoice}`;
      document.getElementById("message").innerHTML = "Tie!";
      }
    }
    
    else if (userChoice == 'scissors') {
      if (computerChoice == 'rock'){
        document.getElementById("userChoice").innerHTML = `Your choice is ${userChoice}`;
        document.getElementById("computerChoice").innerHTML = `Computer choice is ${computerChoice}`;
        document.getElementById("message").innerHTML = "Computer Wins!";
      }
      else if (computerChoice == 'paper'){
        document.getElementById("userChoice").innerHTML = `Your choice is ${userChoice}`;
        document.getElementById("computerChoice").innerHTML = `Computer choice is ${computerChoice}`;
        document.getElementById("message").innerHTML = "You Win!";
      }
      else if (userChoice === computerChoice) {
      document.getElementById("userChoice").innerHTML = `Your choice is ${userChoice}`;
      document.getElementById("computerChoice").innerHTML = `Computer choice is ${computerChoice}`;
      document.getElementById("message").innerHTML = "Tie!";
      }
    }
  });
}





