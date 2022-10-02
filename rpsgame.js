

// function playRound(){
//    let score = 0
//    outcome = RockPaperScissors(); 
//    if (outcome ==='You win!'){
//        score++
//    } else if (outcome === 'You lost!'){
//        score--
//    } else (outcome ==='Tie game!')
//        score

   
//    alert(outcome);
//    console.log(outcome);
//    console.log(score)

//    return score; }

// Oct 2nd - 3h 0 mins in

const gameStart = document.querySelector('#gameStart');
gameStart.addEventListener('click', game);

function game(){

   function getComputerChoice() {
      options = ['rock','paper','scissors']
      let randomNumber = Math.floor(Math.random()*3);
      choice = options[randomNumber];
      return choice;
   } 

   function playRound (){ 
      computerSelection = getComputerChoice();

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
      
      };

   function rPS (Event){
      playerSelection = (Event.target.value);
      playRound();
   };

   const statusBar = document.querySelector('#statusBar');
   const weapon = document.querySelectorAll('.weapon');

   statusBar.textContent = 'Status: Game in progress, Round 1 - Make a selection!'

   weapon.forEach(weapon =>{ weapon.addEventListener('click', rPS) });

   var playerSelection; 
   var playerScore = 0;
   var computerScore = 0;
   var roundNumber = 0;

   return playerScore;
   return computerScore;

   }





