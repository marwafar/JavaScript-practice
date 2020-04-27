const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput ==='paper' || userInput ==='scissors'|| userInput === 'bomb'){
    return userInput;
  } else {
    return 'Error!';
  }
};

//console.log(getUserChoice('Paper'));

function getComputerChoice(){
  let num = Math.floor(Math.random()*3);
  switch (num){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

//console.log(getUserChoice(getComputerChoice()));

function determineWinner (userChoice,computerChoice){
  if (userChoice===computerChoice){
    return 'Game was a tie';
  }
  if (userChoice==='rock'){
    if (computerChoice ==='paper'){
      return 'Computer won';
    } else {
      return 'User Won';
    }
  }
  if (userChoice==='paper'){
      if(computerChoice==='scissors'){
        return 'Computer won';
      } else {
        return 'You won';
       }
     }
  if (userChoice==='scissors'){
    if (computerChoice === 'rock'){
      return 'Computer won';
    } else {
      return 'You won';
    }
  }
  if (userChoice==='bomb'){
    return 'You won';
  }
};

//console.log(determineWinner ('paper','rock'));

const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice= getComputerChoice();
  console.log(userChoice,computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
};

playGame();


