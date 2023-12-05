"use strict";

let generatedName = "";

let consonants = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let vowels = ["a", "e", "i", "o", "u"];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let dash = "-";

const chooseConsonant = () => {
  let chosenConsonant =
    consonants[Math.floor(Math.random() * consonants.length)];

  generatedName += chosenConsonant.toUpperCase();

  pushNameToDOM();
};

const chooseVowel = () => {
  let chosenVowel = vowels[Math.floor(Math.random() * vowels.length)];

  generatedName += chosenVowel.toUpperCase();

  pushNameToDOM();
};

const chooseNumber = () => {
  let chosenNumber = numbers[Math.floor(Math.random() * numbers.length)];

  generatedName += chosenNumber.toUpperCase();

  pushNameToDOM();
};

const addDash = () => {
  generatedName += dash;

  pushNameToDOM();
};

const deleteLetter = () => {
  generatedName = generatedName.slice(0, generatedName.length - 1);

  pushNameToDOM();
};

const clearWord = () => {
  generatedName = "";

  pushNameToDOM();
};

const pushNameToDOM = () => {
  document.getElementById("nameDisplay").innerHTML = generatedName;
};

const modal = document.getElementById("myModal");

const button = document.getElementById("modalButton");

const closeButton = document.getElementById("span");

const showModal = () => {
  modal.style.display = "block";
};

const hideModal = () => {
  modal.style.display = "none";
};

const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;
