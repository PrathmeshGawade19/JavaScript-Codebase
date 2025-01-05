console.log("Rock-Paper-Scissors Game");

let userScore = 0;
let compScore = 0;
let seriesOver = false;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        if(seriesOver == false){
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
        }
    })
})

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);

    if(userChoice === compChoice){
        gameDraw();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const gameDraw = () => {
    console.log("game drawn");
    msg.innerText = "Game Drawn";
    msg.style.backgroundColor = "#081b31";

}

const showWinner = (userWin) => {
    if(userWin == true){
        console.log("you win!!!");
        msg.innerText = "You Win!!!";
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
        seriesWinner(userScore, compScore);
    }
    else{
        console.log("you lose!!!");
        msg.innerText = "You Lose!!!";
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
        seriesWinner(userScore, compScore);
    }
}


const seriesWinner = (userScore, compScore) => {
    if(userScore === 5){
        msg.innerText = "You Won the Series of 5";
        msg.style.backgroundColor = "green";
        seriesOver = true;  
    }
    else if(compScore === 5){
        msg.innerText = "You lost the Series of 5";
        msg.style.backgroundColor = "red";
        seriesOver = true;
    }
}




