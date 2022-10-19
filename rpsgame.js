
main ()

//main function for the entire game. Holds all of the functions in this script.
function main (){

//Clicking gamestart button executes the game() function:

const gameStart = document.querySelector('#gameStart');
gameStart.addEventListener('click', game);


function game(){

   //Gets a random choice from Rock/paper/scissors from computer
   function getComputerChoice() {
      options = ['rock','paper','scissors']
      let randomNumber = Math.floor(Math.random()*3);
      choice = options[randomNumber];
      return choice;
   } 

   function rPS (Event){
      playerSelection = (Event.target.value);
      playRound();

      if (playerScore === 5){
         gameWinner.textContent = `You win the ROCK PAPER SCISSORS Battle!`

      } else if (computerScore === 5) {
         gameWinner.textContent = 'You have lost the rock paper scissors battle :('
      }
      else{

      }

      statusBar.textContent = `Game in progress: Round ${roundNumber}!`
      scoreBoard.textContent = `You: ${playerScore} | Computer ${computerScore}`
      
   };

   function playRound (){ 
      computerSelection = getComputerChoice()

      if    ((playerSelection === 'rock' && computerSelection ==='scissors') ||
            (playerSelection === 'paper' && computerSelection ==='rock') ||
            (playerSelection === 'scissors' && computerSelection ==='paper')) {

         result = ('W')
         playerScore++
         roundNumber++}
         
      
      else if ((playerSelection === 'rock' && computerSelection ==='paper') ||
               (playerSelection === 'paper' && computerSelection ==='scissors') ||
               (playerSelection === 'scissors' && computerSelection ==='rock')){
         
         result = ('L')
         computerScore++
         roundNumber++}
         
      else if ((playerSelection === 'rock' && computerSelection ==='rock') ||
               (playerSelection === 'paper' && computerSelection ==='paper') ||
               (playerSelection === 'scissors' && computerSelection ==='scissors')){
         
         result = ('T')
         roundNumber++} 
      
      console.log(playerSelection);
      console.log(result);
      console.log(playerScore);
      console.log(computerScore);
      console.log(roundNumber);
      return result;
      
      }
   
function gameOver(){
   gameStart.addEventListener ('click', reset);
}

function reset(){
   statusBar.textContent = 'Status: Game has not started.'
   scoreBoard.textContent = 'Scoreboard:'
   gameStart.textContent = 'Begin 5 Rounds!'
   gameWinner.textContent = ''
   playerScore = 0
   computerScore = 0
   roundNumber = 0
   
   console.log(playerScore);
   console.log(computerScore)
}

   const statusBar = document.querySelector('#statusBar');
   const scoreBoard = document.querySelector('#scoreBoard');
   const weapon = document.querySelectorAll('.weapon');
   const gameWinner = document.querySelector('#gameWinner');

   gameStart.textContent = 'Reset'

   gameStart.addEventListener ('click', reset);

   statusBar.textContent = 'Game in progress, Round 1 - Make a selection!'

   weapon.forEach(weapon =>{ weapon.addEventListener('click', rPS) });
   
   var playerSelection; 
   var playerScore = 0;
   var computerScore = 0;
   var roundNumber = 0;

   return playerScore;
   return computerScore;

}}

