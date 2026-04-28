
    let score=JSON.parse(localStorage.getItem('score'))
    ||{
        wins:0,
        losses:0,
        ties:0
      }
      let scoreParagraph=document.querySelector('.score');
      
      scoreParagraph.innerHTML=`Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`
      let computerPic=''
    

    function resetScore(){
      score.wins=0;
      score.losses=0;
      score.ties=0;
      localStorage.removeItem('score');
      scoreParagraph.innerHTML=`Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`
    }
    function pickComputerMove(){
      const computerChoice = Math.random();
      let computerMove = '';
      if (computerChoice >=0 && computerChoice <= 1/3) {
        
        computerMove='rock';
        computerPic=`<img src="images/rock-emoji.png" alt="Rock" class="emoji">`
      } 
      else if (computerChoice >1/3 && computerChoice <= 2/3) {
        
        computerMove='paper';
        computerPic=`<img src="images/paper-emoji.png" alt="Rock" class="emoji">`
      } 
      else {
        computerMove='scissors';
        computerPic=`<img src="images/scissors-emoji.png" alt="Rock" class="emoji">`
      }

      return computerMove;
    }

    function playGame(playerMove){
      const computerMove=pickComputerMove();
      let whoWin=document.querySelector('.who-win')
      let ourChoice=document.querySelector('.Choice');
      let result='';
      if (playerMove==='scissors'){
        if (computerMove === 'rock') {
          result='You lose.';
        } else if (computerMove === 'paper') {
          result='You win.';
        } else {
          result='Tie.';
        }
        playerMove=`<img src="images/scissors-emoji.png" alt="Rock" class="emoji">`
      }
      else if (playerMove==='paper'){
        if (computerMove === 'rock') {
          result='You win.';
        } else if (computerMove === 'paper') {
          result='Tie.';
        } else {
          result='You lose.';
        }
        playerMove=`<img src="images/paper-emoji.png" alt="Rock" class="emoji">`
      }
      else if(playerMove==='rock'){
        if (computerMove === 'rock') {
          result='Tie.';
        } else if (computerMove === 'paper') {
          result='You lose.';
        } else {
          result='You win.';
        }
        playerMove=`<img src="images/rock-emoji.png" alt="Rock" class="emoji">`
      }
      if(result==='You win.'){
        score.wins++
      }
      else if(result==='You lose.'){
        score.losses++
      }
      else{
        score.ties++
      }
      whoWin.innerHTML=result;
      ourChoice.innerHTML=`You:${playerMove} Computer:${computerPic}`
      scoreParagraph.innerHTML=`Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`
      localStorage.setItem('score',JSON.stringify(score));
      
      // alert(`You chose: ${playerMove}. Computer chose: ${computerMove}. ${result} Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`);
    }

  