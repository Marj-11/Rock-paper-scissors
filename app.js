let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score"),
compScore_span = document.getElementById("comp-score"),
scoreBoard_div = document.querySelector(".score-board"),
result_p = document.querySelector(".result > p"),
rock_div = document.getElementById("r"),
paper_div = document.getElementById("p"),
scissors_div = document.getElementById("s");





function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function converToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}





function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${converToWord(userChoice)}${smallUserWord} beats ${converToWord(computerChoice)}${smallCompWord}. You Win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 500);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${converToWord(userChoice)}${smallUserWord} loses to ${converToWord(computerChoice)}${smallCompWord}. You lost...`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${converToWord(userChoice)}${smallUserWord} equals  ${converToWord(computerChoice)}${smallCompWord}. It's a draw.`;
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('grey-glow'), 500);
}





function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;


    }
}


function main() {
    rock_div.addEventListener("click", () => game("r"));

    paper_div.addEventListener("click", () => game("p"));

    scissors_div.addEventListener("click", () => game("s"));
}

main();