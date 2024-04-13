let diceResult = document.querySelector("#diceResult");

let inputText = document.querySelector("#inputText");

const btnStart = document.querySelector("#btnStart");
const btnReset = document.querySelector("#btnReset");

let diceChoice = 0;
let countTime = 1;
let countResult = -1;

btnStart.addEventListener("click", () => {
  diceChoice = inputText.value;
  countResult++;
  if (countResult > 0) {
    document.querySelector(".textResult").innerHTML += `${
      "Lancer n°" + countResult + " : " + diceResult.innerHTML + "<br/>"
    }`;
  }
  if (diceChoice < 100000 && diceChoice > 0) {
    tirage(diceChoice);
  } else {
    diceResult.innerHTML = "Null";
    inputText.value = "";
  }
});

btnReset.addEventListener("click", () => {
  diceResult.innerHTML = "";
  inputText.value = "";
  document.querySelector(".textResult").innerHTML = ``;
  countResult = -1;
});

function tirage(diceChoice) {
  countTime = 1;
  setTimeout(() => {
    diceResult.innerHTML = Math.floor(Math.random() * diceChoice + 1);
  }, countTime);
  countTime /= 0.65;
  setTimeout(() => {
    diceResult.innerHTML = Math.floor(Math.random() * diceChoice + 1);
  }, countTime);
  countTime /= 0.65;
  setTimeout(() => {
    diceResult.innerHTML = Math.floor(Math.random() * diceChoice + 1);
  }, countTime);
  countTime /= 0.65;
  setTimeout(() => {
    diceResult.innerHTML = Math.floor(Math.random() * diceChoice + 1);
  }, countTime);
  countTime /= 0.65;
  setTimeout(() => {
    diceResult.innerHTML = Math.floor(Math.random() * diceChoice + 1);
  }, countTime);
  countTime /= 0.65;
  setTimeout(() => {
    diceResult.innerHTML = Math.floor(Math.random() * diceChoice + 1);
  }, countTime);
  countTime /= 0.65;
  setTimeout(() => {
    diceResult.innerHTML = Math.floor(Math.random() * diceChoice + 1);
  }, countTime);
  countTime /= 0.65;
  setTimeout(() => {
    diceResult.innerHTML = Math.floor(Math.random() * diceChoice + 1);
  }, countTime);
  countTime /= 0.65;
  setTimeout(() => {
    diceResult.innerHTML = Math.floor(Math.random() * diceChoice + 1);
  }, countTime);
  countTime /= 0.65;
  setTimeout(() => {
    diceResult.innerHTML = Math.floor(Math.random() * diceChoice + 1);
  }, countTime);
  countTime /= 0.65;
  setTimeout(() => {
    diceResult.innerHTML = Math.floor(Math.random() * diceChoice + 1);
  }, countTime);
  countTime /= 0.65;
  setTimeout(() => {
    diceResult.innerHTML = Math.floor(Math.random() * diceChoice + 1);
  }, countTime);
  countTime /= 0.65;
  setTimeout(() => {
    diceResult.innerHTML = Math.floor(Math.random() * diceChoice + 1);
  }, countTime);
  countTime /= 0.65;
  setTimeout(() => {
    diceResult.innerHTML = Math.floor(Math.random() * diceChoice + 1);
  }, countTime);
  countTime /= 0.65;
  setTimeout(() => {
    diceResult.innerHTML = Math.floor(Math.random() * diceChoice + 1);
  }, countTime);
  countTime /= 0.65;
  setTimeout(() => {
    diceResult.innerHTML = Math.floor(Math.random() * diceChoice + 1);
  }, countTime);
  countTime /= 0.65;
  setTimeout(() => {
    diceResult.innerHTML = Math.floor(Math.random() * diceChoice + 1);
  }, countTime);
  countTime /= 0.65;
}
