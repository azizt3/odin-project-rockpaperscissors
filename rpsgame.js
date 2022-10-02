function getComputerChoice() {
   options = ['rock','paper','scissors']
   let randomNumber = Math.floor(Math.random()*3);
   choice = options[randomNumber];
   return choice;
} 

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

// Oct 2nd - 2h 30 mins in

const gameStart = document.querySelector('#gameStart');
gameStart.addEventListener('click', game);

function game(){
   function playRound (){ 
      computerSelection = getComputerChoice();

      if    ((playerSelection === 'rock' && computerSelection ==='scissors') ||
            (playerSelection === 'paper' && computerSelection ==='rock') ||
            (playerSelection === 'scissors' && computerSelection ==='paper')) {

         result = ('W')}
      
      else if ((playerSelection === 'rock' && computerSelection ==='paper') ||
               (playerSelection === 'paper' && computerSelection ==='scissors') ||
               (playerSelection === 'scissors' && computerSelection ==='rock')){
         
         result = ('L')}
          
      else if ((playerSelection === 'rock' && computerSelection ==='rock') ||
               (playerSelection === 'paper' && computerSelection ==='paper') ||
               (playerSelection === 'scissors' && computerSelection ==='scissors')){
         
         result = ('T')}
      
      else {
         
         result = ('error')}

      console.log(playerSelection);
      console.log(result)
      return result;
      
      };

   function rPS (Event){
      playerSelection = (Event.target.value);
      playRound();
   };

   var playerSelection 
   
   const statusBar = document.querySelector('#statusBar');
   statusBar.textContent = 'Status: Game in progress, Round 1 - Make a selection!'
   const weapon = document.querySelectorAll('.weapon')
   weapon.forEach(weapon =>{
      weapon.addEventListener('click', rPS)
   })

   const gameResult = document.querySelector('#gameResult');

   }





