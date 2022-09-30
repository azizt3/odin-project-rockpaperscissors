function getComputerChoice() {
   options = ['rock','paper','scissors']
   let randomNumber = Math.floor(Math.random()*3);
   choice = options[randomNumber];
   return choice;
} 

function playRound(){
   let score = 0
   outcome = RockPaperScissors(); 
   if (outcome ==='You win!'){
       score++
   } else if (outcome === 'You lost!'){
       score--
   } else (outcome ==='Tie game!')
       score

   
   alert(outcome);
   console.log(outcome);
   console.log(score)

   return score; }


function RockPaperScissors (){ 
   computerSelection = getComputerChoice();
   if (playerSelection === 'rock' && computerSelection ==='scissors'){
      result = ('You win!');
   } else if (playerSelection === 'rock' && computerSelection ==='paper'){
      result = ('You lost!');
   } else if (playerSelection === 'rock' && computerSelection ==='rock'){
      result = ('Tie game!');
   } else if (playerSelection === 'paper' && computerSelection ==='scissors'){
      result = ('You lost!');
   } else if (playerSelection === 'paper' && computerSelection ==='paper'){
      result = ('Tie game!');
   } else if (playerSelection === 'paper' && computerSelection ==='rock'){
      result = ('You win!');
   } else if (playerSelection === 'scissors' && computerSelection ==='paper'){
      result = ('You win!');
   } else if (playerSelection === 'scissors' && computerSelection ==='rock'){
      result = ('You lost!');
   } else if (playerSelection === 'scissors' && computerSelection ==='scissors'){
      result = ('Tie game!')
   } else {
      result = 'Invalid entry! Please try again!'
   }
   console.log(playerSelection);
   console.log(computerSelection);

   return result;
   };



const rps = document.querySelector('.weapon');


document.addEventListener('click', rPS, true);

function rPS (Event){
   playerSelection = (Event.target.value);
   console.log(playerSelection);
   RockPaperScissors(playerSelection);
   playRound();
};


