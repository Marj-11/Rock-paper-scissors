const scores = {
  userScore: 0,
  computerScore: 0
};

const templates = {
  win: {
    displayEl: document.getElementById("user-score"),
    score: "userScore",
    message: ["beats", "you win!"],
    styling: "green-glow"
  },
  lose: {
    displayEl: document.getElementById("comp-score"),
    score: "computerScore",
    message: ["loses", "you lost!"],
    styling: "red-glow"
  },
  draw: {
    message: ["equals", "it's a draw!"],
    styling: "grey-glow"
  }
};



const results_p = document.querySelector(".results > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

function getCompChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function results(userChoice, compChoice, action) {
  let status = templates[action];
  if (action !== "draw") {
    scores[status.score] = scores[status.score] + 1;
    status.displayEl.innerHTML = scores[status.score];
  }
  const smallUserWord = "user".fontsize(3).sub();
  const smallcompWord = "comp".fontsize(3).sub();
  results_p.innerHTML = `${userChoice}${smallUserWord} ${
    status.message[0]
  } ${compChoice}${smallcompWord}. ${status.message[1]}`;

  document.getElementById(userChoice).classList.add(status.styling);

  setTimeout(() => {
    document.getElementById(userChoice).classList.remove(status.styling);
  }, 800);
}

function game(userChoice) {
  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      results(userChoice, compChoice, "win");
      break;
    case "ScissorsRock":
    case "RockPaper":
    case "PaperScissors":
      results(userChoice, compChoice, "lose");
      break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      results(userChoice, compChoice, "draw");
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => game("Rock"));
  paper_div.addEventListener("click", () => game("Paper"));
  scissors_div.addEventListener("click", () => game("Scissors"));
}
main();

