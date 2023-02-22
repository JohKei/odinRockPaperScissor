//For this game to work i need:
//selections array for the 3 possible selections: Rock Paper Scissor
const selections=["rock","paper","scissor"]
//User & Computer score
let userScore=0
let computerScore=0
//User & Computer choice
let computerSelection=selections[getComputerChoice()]
let userSelection=""
console.log(userSelection)
//a getComputerChoice function to pick one of the selections
function getComputerChoice(choice){
    return choice=Math.floor(Math.random()*3)
}
//a playerSelection (should be case insensitive) should be a prompt at first
function toLowerCase(string){
    string=prompt("choose Rock, Paper or Scissor")
    return string.toLowerCase()
}
//check if checkValidChoice == true
        //return choice
        //later return playRound()
    //else
        //print "sorry i couldn't recognize your selection. please try again"
        // re run playerSelection
function checkValidChoice(userChoice){
    if (selections.includes(userChoice)){
        alert("Valid choice!")
    }else{
        alert("Choice is not Valid!")
        playRound(userSelection,computerSelection)
    }
}
//playRound function which takes playerSelection + computerSelection as parameter
    //this function should return:
    //a winner with a string like "You Lose! Rock beats Scissor"
function playRound(user,computer){
    computer=computerSelection
    user=toLowerCase(userSelection)
    checkValidChoice(user)
    // if user scissor & computer paper
        //user wins
        //user score++
    //else if etc.
    //if user == computer
        //draw
    
}
//starGame function to playRound until user or computer reaches score of 5


playRound()