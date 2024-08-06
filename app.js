let userScore = 0;
let computerScore = 0;

const choise = document.querySelectorAll(".choise");
const msg = document.querySelector("#msg");
const userScoreparr = document.querySelector("#you");
const compScoreparr = document.querySelector("#comp");
const drawGame = () => {
    console.log("Game was Drew")
    msg.innerText = "DREW GAME! PLAY AGAIN"
    msg.style.backgroundColor = " #081b31";
}

const genCompChoise = () => {
    const option = ["rock", "paper", "Scissor"];
    const randIx = Math.floor(Math.random() * 3);
    return option[randIx];
};

const showWinner = ( userWin, userChoise, compChoise) => {
    if (userWin) {
        userScore++;
        userScoreparr.innerText = userScore;
        console.log("You Win");
        msg.innerText = `You win! Your ${userChoise} beats ${compChoise}`;
        msg.style.backgroundColor = "green";
    }
    else {
        computerScore++;
        compScoreparr.innerText = computerScore;
        console.log("You Lose");
        msg.innerText = `You Loose! Your ${userChoise} beats by ${compChoise}`;
        msg.style.backgroundColor = "red";
    }

}


const playGame = (userChoise) => {
    console.log("user choise = ", userChoise);
    const compChoise = genCompChoise();
    console.log("comp choise =", compChoise);
    if (userChoise === compChoise) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoise === "rock") {
            userWin = compChoise === "Paper" ? false : true;
        }
        else if (userChoise === "Paper") {
            userWin = compChoise === "Scissor" ? false : true;
        }
        else {
            userWin = compChoise === "rock" ? false : true;
        }
        showWinner(userWin ,userChoise,compChoise);
    }
};
choise.forEach((choise) => {
    choise.addEventListener("click", () => {
        const userChoise = choise.getAttribute("id");
        playGame(userChoise);
    });
});