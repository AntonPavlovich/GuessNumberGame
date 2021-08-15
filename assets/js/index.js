"use strict";

const randomNum = () => Math.round(Math.random() * 100 + 1);
let rightAnswer = randomNum();

const prevGuessesPar = document.querySelector(".prevGuesses");
const btn = document.querySelector(".btn");
const aboutGuesses = document.querySelector(".aboutGuesses");
const input = document.querySelector("#input1");
const middleDiv = document.querySelector(".middle");
input.focus();

let counter = 1;
let resetBtn;

function submitGuess() {
  const userGuess = Number(input.value);
  prevGuessesPar.textContent += ` ${userGuess}`;
  input.value = "";
  input.focus();
  if (userGuess > rightAnswer) {
    aboutGuesses.textContent = "Your guess was to high";
  } else if (userGuess < rightAnswer) {

    aboutGuesses.textContent = "Your guess was to low";
  }

  if (userGuess !== rightAnswer) {
    aboutGuesses.style.backgroundColor = "red";
  } else if (userGuess === rightAnswer) {
    aboutGuesses.textContent = "CONGRATULATIONS!";
    aboutGuesses.style.backgroundColor = "green";
    setGameOver();
  }

  if (counter === 10) {
    aboutGuesses.textContent = "!!!GAME OVER!!!";
    setGameOver();
  }

  counter++;
}
btn.addEventListener("click", submitGuess);

function setGameOver() {
  input.disabled = true;
  btn.disabled = true;
  resetBtn = document.createElement("button");
  resetBtn.textContent = "Restart game";
  middleDiv.append(resetBtn);
  resetBtn.addEventListener("click", resetGame);
}

function resetGame() {
  rightAnswer = randomNum();
  counter = 1;
  prevGuessesPar.textContent = "Your guesses: ";
  input.disabled = false;
  btn.disabled = false;
  aboutGuesses.textContent = "";
  resetBtn.remove();
  input.focus();
}
