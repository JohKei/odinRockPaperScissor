
//Logic Section

    const selections=["rock","paper","scissor"]
    let userScore=0
    let computerScore=0
    let computerSelection=""
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
            createAppendGif("./images/draw.gif")
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
            gameOverHEl.textContent=`You Won!`
            let message = (`You reached ${userScore} Points while the Villain reached ${computerScore} Points!`) 
            lastGame(message)
            gameOver()
            callBackGif()
        }else if(computerScore==5){
            gameOverHEl.textContent=`Game Over!`
            let message = (`You Lost! you reached ${userScore} Points while the Villain reached ${computerScore} Points!`)
            lastGame(message)
            gameOver()
            callBackGif()
        }   
    }


//Intro Popup Section

//Outro Popup Section
    const gameOverDiv = document.querySelector("#gameOver")
    const gameOverHEl = document.querySelector("#gameOverH-el")
    const lastGameEl = document.querySelector("#lastGame-el")

    const restartBtn = document.querySelector("#restart-btn")
        
    //gameOver Popup function
    function lastGame(x){
        lastGameEl.textContent=x
    }
    function gameOver(){
        gameOverDiv.style.visibility="visible"
        mainBodyEl.style.visibility="hidden"
    }

//Header Section

//ScoreBoard Section
    const playerScoreEl = document.querySelector("#playerScore-el")
    const computerScoreEl = document.querySelector("#computerScore-el")
    playerScoreEl.textContent = userScore
    computerScoreEl.textContent = computerScore

    //update scoreBoard after each round function

    function updateScoreEl(){
        playerScoreEl.textContent = userScore
        computerScoreEl.textContent = computerScore
    }
//gifContainer Section
    function createAppendGif(x){
        const gifContainer = document.querySelector("#gifContainer")
        const gifImg = document.createElement("img");
        gifImg.classList.add("gif")
        gifImg.setAttribute("id","gif")
        gifImg.src=x + "?t=" + Date.now();
        gifContainer.appendChild(gifImg)
    }
    
   
 //#todo bad performance
    function callBackGif() {
        const gifContainer = document.querySelector("#gifContainer");
        gifContainer.innerHTML = "";
      }


    //function show rock gif if rock wins the round
    function showGif(whatGif,whatWinner){
        if ( whatGif == "rock" && whatWinner == "computer"){
            createAppendGif("./images/computerRock.gif")

        }else if ( whatGif == "scissor" && whatWinner == "computer"){
            createAppendGif("./images/computerScissor.gif")

        }else if ( whatGif == "paper" && whatWinner == "computer"){
            createAppendGif("./images/computerPaper.gif")

        }else if( whatGif == "rock" && whatWinner == "user"){
            createAppendGif("./images/userRock.gif")

        }else if ( whatGif == "scissor" && whatWinner == "user"){
            createAppendGif("./images/userScissor.gif")

        }else if ( whatGif == "paper" && whatWinner == "user"){
            createAppendGif("./images/userPaper.gif")

        }
    }
   

//description Section
    const roundStatusEl = document.querySelector("#roundStatus-el")

//Button Section
    const rockBtn = document.querySelector("#rock-btn")
    const paperBtn = document.querySelector("#paper-btn")
    const scissorBtn = document.querySelector("#scissor-btn")

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
//footer Section