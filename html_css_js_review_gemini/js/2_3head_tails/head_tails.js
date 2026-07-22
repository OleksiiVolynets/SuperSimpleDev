function playGame(userChoice){
  const computerNumber=Math.random();
  let computerChoice;
  let result;
  if(computerNumber>=0 && computerNumber<0.5)
    computerChoice='tails'
  else{
    computerChoice='heads'
  }
  if(userChoice===computerChoice)
    result='You won'
  else{
    result='You lost'
  }
  alert(`You chose: ${userChoice} Computer chose: ${computerChoice} Result: ${result}`)
}