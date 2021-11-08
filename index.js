let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");

const rock_div = document.getElementById("rock");
const papers_div = document.getElementById("papers");
const scissors_div = document.getElementById("scissors");

rock_div.addEventListener("click", function () {
  game("r");
});

papers_div.addEventListener("click", function () {
  game("p");
});

scissors_div.addEventListener("click", function () {
  game("s");
});

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const ch = Math.floor(Math.random() * 3);
  return choices[ch];
}

function toword(choice) {
  if (choice == "r") return "Rock";
  if (choice == "p") return "Paper";
  return "Scissors";
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${toword(user)} defeats ${toword(
    computer
  )}.  You win! `;
}

function loose(user, computer) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML =
    toword(user) + " looses " + toword(computer) + ".  You loses!";
}

function draw(user, computer) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML =
    toword(user) + " vs " + toword(computer) + ".  Its a draw!";
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  console.log("user chooses=>  " + userChoice);
  console.log("computer chooses=>  " + computerChoice);

  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      loose(userChoice, computerChoice);
      break;
    default:
      draw(userChoice, computerChoice);
  }
}
