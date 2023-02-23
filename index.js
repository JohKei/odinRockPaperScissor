//For this game to work i need:
//selections array for the 3 possible selections: Rock Paper Scissor
const selections=["rock","paper","scissor"]
//User & Computer score
let userScore=0
let computerScore=0
//User & Computer choice
let computerSelection=""
let userSelection=""
//a getComputerChoice function to pick one of the selections
function getComputerChoice(choice){
    return choice=selections[Math.floor(Math.random()*3)]
}
//a getUserChoice -> ask for choice -> valid choice -> return choice
function getUserChoice(get){
    get=userChoice(get)
    validChoice(get)
    return get
}
//ask userChoice (should be case insensitive) should be a prompt at first
function userChoice(string){
    string=prompt("choose Rock, Paper or Scissor")   
    return string=string.toLowerCase()
}
//checkValidChoice == true (check if user choice is in selections)
        //return true
    //else
        //print "sorry i couldn't recognize your selection. please try again"
        // re run getUserChoice
function validChoice(userChoice){
    if (selections.includes(userChoice)){
        alert("choice is Valid!")
        return true 
    }else{
        alert("Choice is not Valid!")
        getUserChoice(userSelection)  
    }
}
//I believe i need a getBothChoices function to get choices each round
//playRound function which takes playerSelection + computerSelection as parameter
    //this function should return:
    //a winner with a string like "You Lose! Rock beats Scissor"
    //or "It's a Draw!"
function playRound(user,computer){
    user=getUserChoice(userSelection)
    computer=getComputerChoice(computerSelection)
    if (user==computer){
        alert(`It's a Draw! You choose ${user} and the computer choose ${computer}!`)
    }else if(user=="rock"&&computer=="paper"){
        alert(`You Lost! you chose ${user} and the computer chose ${computer}`)
        return computerScore+=1
    }else if(user=="rock"&&computer=="scissor"){
        alert(`You Won! you chose ${user} and the computer chose ${computer}`)
        return userScore+=1
    }else if(user=="paper"&&computer=="rock"){
        alert(`You Won! you chose ${user} and the computer chose ${computer}`)
        return userScore+=1
    }else if(user=="paper"&&computer=="scissor"){
        alert(`You Lost! you chose ${user} and the computer chose ${computer}`)
        return computerScore+=1
    }else if(user=="scissor"&&computer=="rock"){
        alert(`You Lost! you chose ${user} and the computer chose ${computer}`)
        return computerScore+=1
    }else if(user=="scissor"&&computer=="paper"){
        alert(`You Won! you chose ${user} and the computer chose ${computer}`)
        return userScore+=1
    }
    
}
//starGame function to playRound until user or computer reaches score of 5

function startGame(){
    while (userScore<=5 || computerScore<=5){
        playRound()
        if (userScore==5){
            alert(`You Won! you reached ${userScore} Points while the computer reached ${computerScore} Points!`)
            break
        }else if(computerScore==5){
            alert('You Won! you reached ${userScore} Points while the computer reached ${computerScore} Points!')
        }
    }
}