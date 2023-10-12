const getUserChoice = (userInput)=>{
    userInput = userInput.toLowerCase();
    if (userInput==="rock"||"paper"||"scissors") {
        return userInput;
    } else {
        console.log('Please Enter Corrcet Word Like rock,paper,scissors');
    }
}

// console.log(getUserChoice("scissors"));

const getComputerChoice = () =>{
    let randomNumber = Math.floor(Math.random()*2);
    if(randomNumber=0){
        return "rock"
    }else if(randomNumber=1){
        return "paper"
    }else{
        return "scissors"
    }
}

// console.log(getComputerChoice())

const determineWinner = (UserChoice,ComputerChoice) =>{
    if(UserChoice==ComputerChoice){
        return "Game Was Tie"
    }
    if(UserChoice=="rock"){
        if (ComputerChoice=="paper") {
            return "computer was won"
        } else {
            return "user was won"
        }
    }
    if(UserChoice=="paper"){
        if (ComputerChoice=="scissors"||"rock") {
            return "winner"
        } 
    }
    if(UserChoice=="scissors"){
        if(ComputerChoice=="rock"||"paper"){
            return "winner"
        }
    }
}

const playGame = () =>{
    let userChoice = getUserChoice("rock");
    let computerChoice = getComputerChoice()
    console.log(`${userChoice} ${computerChoice}`)
    console.log(determineWinner(userChoice,computerChoice))
}
playGame()