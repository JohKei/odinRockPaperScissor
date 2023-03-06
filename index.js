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
    
    if (user==computer){
        drawGif.src="./images/draw.gif"
        roundStatusEl.textContent=`It's a Draw! You choose ${user} and the computer choose ${computer}!`
    }else if(user=="rock"&&computer=="paper"){
        roundStatusEl.textContent=`You Lost! you chose ${user} and the computer chose ${computer}`
        computerScore+=1
        updateScoreEl()
        checkWinner()
        if(computerScore<5){
            showGif("paper","computer")
        }
    }else if(user=="rock"&&computer=="scissor"){
        roundStatusEl.textContent=`You Won! you chose ${user} and the computer chose ${computer}`
        userScore+=1
        updateScoreEl()
        checkWinner()
        if(userScore<5){
            showGif("rock","user")
        }
    }else if(user=="paper"&&computer=="rock"){
        roundStatusEl.textContent=`You Won! you chose ${user} and the computer chose ${computer}`
        userScore+=1
        updateScoreEl()
        checkWinner()
        if(userScore<5){
            showGif("paper","user")
        }
    }else if(user=="paper"&&computer=="scissor"){
        roundStatusEl.textContent=`You Lost! you chose ${user} and the computer chose ${computer}`
        computerScore+=1
        updateScoreEl()
        checkWinner()
        if(computerScore<5){
            showGif("scissor","computer")
        }
    }else if(user=="scissor"&&computer=="rock"){
        roundStatusEl.textContent=`You Lost! you chose ${user} and the computer chose ${computer}`
        computerScore+=1
        updateScoreEl()
        checkWinner()
        if(computerScore<5){
            showGif("rock","computer")
        }
    }else if(user=="scissor"&&computer=="paper"){
        roundStatusEl.textContent=`You Won! you chose ${user} and the computer chose ${computer}`
        userScore+=1
        updateScoreEl()
        checkWinner()
        if(userScore<5){
            showGif("scissor","user")
        }
    }
}

function checkWinner(){
    if (userScore==5){
        gameOverHel.textContent=`You Won!`
        let message = (`You reached ${userScore} Points while the Villain reached ${computerScore} Points!`) 
        lastGame(message)
        gameOver()
        callBackGif()
    }else if(computerScore==5){
        gameOverHel.textContent=`Game Over!`
        let message = (`You Lost! you reached ${userScore} Points while the Villain reached ${computerScore} Points!`)
        lastGame(message)
        gameOver()
        callBackGif()
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
const gameOverDiv = document.querySelector("#gameOver")
const gameOverHel = document.querySelector("#gameOverH-el")
//player&computerScore text content = score
playerScoreEl.textContent = userScore
computerScoreEl.textContent = computerScore
//when pressed rock,paper,scissor run playRound(selection)
rockBtn.addEventListener("click", function(){
    callBackGif()
    playRound(selections[0])
    btnAnimation(rockBtn)
})
paperBtn.addEventListener("click", function(){
    callBackGif()
    playRound(selections[1])
    btnAnimation(paperBtn)
})
scissorBtn.addEventListener("click", function(){
    callBackGif()
    playRound(selections[2])
    btnAnimation(scissorBtn)
})
restartBtn.addEventListener("click", function(){
    restartGame()
} )
//update scoreBoard after each round function
function updateScoreEl(){
    playerScoreEl.textContent = userScore
    computerScoreEl.textContent = computerScore
}
//restartGame
function restartGame(){
    userScore = 0
    computerScore = 0
    updateScoreEl()
    gameOverDiv.style.visibility="hidden"
    mainBodyEl.style.visibility="visible"
    roundStatusEl.textContent = "Choose your Weapon"       

}

/* button click animation */
function btnAnimation(x){
    x.classList.add("buttonActive")
    setTimeout(() => { x.classList.remove("buttonActive")
    }, 150);
}   

function lastGame(x){
    lastGameEl.textContent=x
}
//gameOver Popup function
function gameOver(){
    gameOverDiv.style.visibility="visible"
    mainBodyEl.style.visibility="hidden"
}

//gif 
const mainBodyEl = document.querySelector("#mainBodyEl")
const rockGif = document.querySelector("#dekuRockPunchGif")
const scissorGif = document.querySelector("#zenitsuScissorCut")
const paperGif = document.querySelector("#paperWinGif")
const drawGif = document.querySelector("#drawGif")

function reverseGif(x){
    x.style.transform = "scaleX(-1)"; //this works
}
function unreverseGif(x){
    x.style.transform = "scaleX(1)";
}
//function show rock gif if rock wins the round
//check if user or computer won -> reverse if needed
function showGif(whatGif,whatWinner){
    if ( whatGif == "rock" && whatWinner == "computer"){
        rockGif.src="./images/computerRock.gif"
    }else if ( whatGif == "scissor" && whatWinner == "computer"){
        scissorGif.src="./images/computerScissor.gif"
    }else if ( whatGif == "paper" && whatWinner == "computer"){
        //unreverseGif(paperGif)
        paperGif.src="./images/paperWin.gif"
        unreverseGif(paperGif)
    }else if( whatGif == "rock" && whatWinner == "user"){
        rockGif.src="./images/userRock.gif"
    }else if ( whatGif == "scissor" && whatWinner == "user"){
        scissorGif.src="./images/userScissor.gif"
    }else if ( whatGif == "paper" && whatWinner == "user"){
        paperGif.src="./images/paperWin.gif"
        reverseGif(paperGif)
    }
}

//hide gifs before each round again
function callBackGif(){
    rockGif.src=""
    scissorGif.src=""
    paperGif.src=""
    drawGif.src=""
}
