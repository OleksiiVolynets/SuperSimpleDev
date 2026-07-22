
    let score=JSON.parse(localStorage.getItem('score'))
    ||{
        wins:0,
        losses:0,
        ties:0
      }
      let scoreParagraph=document.querySelector('.score');
      
      scoreParagraph.innerHTML=`Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`
      let computerPic=''
    const considerParag=document.querySelector('.js-considering-paragraph')
    document.querySelector('.js-reset-button').addEventListener('click',()=>{
      considerParag.innerHTML='Are you sure you want to reset the score? <button class="js-decision-yes decision-button">Yes</button> <button class="js-decision-no decision-button">No</button>'

      document.querySelector('.js-decision-yes').addEventListener('click',()=>{
        resetScore();
        considerParag.innerHTML=""
      })
      document.querySelector('.js-decision-no').addEventListener('click',()=>{
        considerParag.innerHTML=""
      })
    })
      
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
    const autoButON=document.querySelector('.js-auto-play')
    autoButON.addEventListener('click',()=>{
      autoPlay();
    })
    document.body.addEventListener('keydown',(event)=>{
      if(event.key==='a'){
        autoPlay();
      }
    })
    let isAutoPlaying=false;
    let intervalID;
    function autoPlay(){
      if(!isAutoPlaying){
        intervalID=setInterval(()=>{
        const playerMove=pickComputerMove();
        playGame(playerMove);
        },1000);
        isAutoPlaying=true;
        autoButON.textContent='Stop Playing'
      }
      else{
        clearInterval(intervalID);
        isAutoPlaying=false;
        autoButON.textContent='Auto Play'
      }
      
    }
    document.querySelector('.js-rock-button').addEventListener('click',(event)=>{
      console.log(event)
      playGame('rock');
    })
    document.querySelector('.js-paper-button').addEventListener('click',()=>{
      playGame('paper');
    })
    document.querySelector('.js-scissors-button').addEventListener('click',()=>{
      playGame('scissors');
    })
    document.body.addEventListener('keydown',(event)=>
    {
      if(event.key==='r'){
        playGame('rock');
      }
      else if(event.key==='s'){
        playGame('scissors');
      }
      else if(event.key==='p'){
        playGame('paper');
      }
    })

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

  