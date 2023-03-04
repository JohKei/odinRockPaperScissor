//For this game to work i need:

//step 1

//selections array for the 3 possible selections: Rock Paper Scissor
const selections=["rock","paper","scissor"]
//User & Computer score
let userScore=0
let computerScore=0
//Computer choice
let computerSelection=""
//a getComputerChoice function to pick one of the selections
function getComputerChoice(choice){
    return choice=selections[Math.floor(Math.random()*3)]
}
//playRound function which takes playerSelection as parameter
    //this function should return:
    //a winner with a string like "You Lose! Rock beats Scissor"
    //or "It's a Draw!"
function playRound(user){
    let computer=getComputerChoice(computerSelection)
    forceRestart()
    if (user==computer){
        roundStatusEl.textContent=`It's a Draw! You choose ${user} and the computer choose ${computer}!`
    }else if(user=="rock"&&computer=="paper"){
        roundStatusEl.textContent=`You Lost! you chose ${user} and the computer chose ${computer}`
        computerScore+=1
        updateScoreEl()
        checkWinner()
    }else if(user=="rock"&&computer=="scissor"){
        roundStatusEl.textContent=`You Won! you chose ${user} and the computer chose ${computer}`
        userScore+=1
        updateScoreEl()
        checkWinner()
    }else if(user=="paper"&&computer=="rock"){
        roundStatusEl.textContent=`You Won! you chose ${user} and the computer chose ${computer}`
        userScore+=1
        updateScoreEl()
        checkWinner()
    }else if(user=="paper"&&computer=="scissor"){
        roundStatusEl.textContent=`You Lost! you chose ${user} and the computer chose ${computer}`
        computerScore+=1
        updateScoreEl()
        checkWinner()
    }else if(user=="scissor"&&computer=="rock"){
        roundStatusEl.textContent=`You Lost! you chose ${user} and the computer chose ${computer}`
        computerScore+=1
        updateScoreEl()
        checkWinner()
    }else if(user=="scissor"&&computer=="paper"){
        roundStatusEl.textContent=`You Won! you chose ${user} and the computer chose ${computer}`
        userScore+=1
        updateScoreEl()
        checkWinner()
    }
}

function checkWinner(){
    if (userScore==5){
        let message = (`You Won! you reached ${userScore} Points while the computer reached ${computerScore} Points!`) 
        roundStatusEl.textContent = "The game is over. Choose your Weapon or restart the game!"       
        lastGame(message)
        alert(message)
    }else if(computerScore==5){
        let message = (`You Lost! you reached ${userScore} Points while the computer reached ${computerScore} Points!`)
        roundStatusEl.textContent = "The game is over. Choose your Weapon or restart the game!"       
        lastGame(message)
        alert(message)
    }   
}

//step 2

//select html elements
const playerScoreEl = document.querySelector("#playerScore-el")
const computerScoreEl = document.querySelector("#computerScore-el")
const roundStatusEl = document.querySelector("#roundStatus-el")
const lastGameEl = document.querySelector("#lastGame-el")
const rockBtn = document.querySelector("#rock-btn")
const paperBtn = document.querySelector("#paper-btn")
const scissorBtn = document.querySelector("#scissor-btn")
const restartBtn = document.querySelector("#restart-btn")
//player&computerScore text content = score
playerScoreEl.textContent = userScore
computerScoreEl.textContent = computerScore
//when pressed rock,paper,scissor run playRound(selection)
rockBtn.addEventListener("click", function(){
    playRound(selections[0])
    btnAnimation(rockBtn)
})
paperBtn.addEventListener("click", function(){
    playRound(selections[1])
    btnAnimation(paperBtn)
})
scissorBtn.addEventListener("click", function(){
    playRound(selections[2])
    btnAnimation(scissorBtn)
})

//update scoreBoard after each round function
function updateScoreEl(){
    playerScoreEl.textContent = userScore
    computerScoreEl.textContent = computerScore
}
//restartGame function
function restartGame(){
    userScore = 0
    computerScore = 0
    updateScoreEl()
}

//force restart if someone already won. Will be unnecessary later
function forceRestart(){
    if (userScore == 5 || computerScore == 5){
        restartGame()
    }
}

// btnAnimation ()
function btnAnimation(x){
    x.classList.add("buttonActive")
    setTimeout(() => { x.classList.remove("buttonActive")
    }, 150);
}   
// add class .buttonActive to buttons 
// for a time period of 0,7 sec
// after 0,7 sec remove .buttonActive from buttons