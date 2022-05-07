const userChoiceDisplay = document.getElementById("userChoice");
const computerChoiceDisplay = document.getElementById("computerChoice");
const resultDisplay = document.getElementById("result");
const score = document.getElementById("score");
const startGame = document.getElementById("startGame");
const containerGame = document.getElementById("gameContainer");

const btns = document.querySelectorAll(".btn-choice");

let userChoice;
let computerChoice;
let result;
let userImg = document.createElement("img");
let computerImg = document.createElement("img");
userImg.className = "imgChoice";
computerImg.className = "imgChoice";

startGame.addEventListener("click", () => {
  startGame.classList.add("hide");
  containerGame.classList.remove("hide");
});

btns.forEach(function (btn) {
  return btn.addEventListener("click", function (e) {
    userChoice = e.target.id;
    if (userChoice === "Rock") {
      userImg.src = "./images/rock.png";
    }
    if (userChoice === "Paper") {
      userImg.src = "./images/paper.png";
    }
    if (userChoice === "Scissors") {
      userImg.src = "./images/scissors.png";
    }
    userChoiceDisplay.appendChild(userImg);
    generateComputerChoice();
    getResult();
    getScore();
  });
});

function generateComputerChoice() {
  let randomNums = Math.ceil(Math.random() * 3);
  if (randomNums === 1) {
    computerChoice = "Rock";
    computerImg.src = "./images/rock.png";
  }
  if (randomNums === 2) {
    computerChoice = "Paper";
    computerImg.src = "./images/paper.png";
  }
  if (randomNums === 3) {
    computerChoice = "Scissors";
    computerImg.src = "./images/scissors.png";
  }
  computerChoiceDisplay.appendChild(computerImg);
}

function getResult() {
  if (userChoice === computerChoice) {
    result = "Draw!";
  }
  if (userChoice === "Rock" && computerChoice === "Paper") {
    result = "You lose!";
  }
  if (userChoice === "Rock" && computerChoice === "Scissors") {
    result = "You won!";
  }
  if (userChoice === "Paper" && computerChoice === "Rock") {
    result = "You won!";
  }
  if (userChoice === "Paper" && computerChoice === "Scissors") {
    result = "You lose!";
  }
  if (userChoice === "Scissors" && computerChoice === "Paper") {
    result = "You won!";
  }
  if (userChoice === "Scissors" && computerChoice === "Rock") {
    result = "You lose!";
  }
  resultDisplay.innerHTML = result;
}

let count = 0;
function getScore() {
  if (result === "You won!") {
    count++;
  }
  if (result === "You lose!") {
    count--;
  }
  if (count <= 0) count = 0;
  score.innerHTML = count;
}
