const btnPlay = document.querySelector("#btnPlay");

const btn100 = document.querySelector("#difficulty100");
const btn1000 = document.querySelector("#difficulty1000");
const btn10000 = document.querySelector("#difficulty10000");

const btnNum = document.querySelectorAll("#btnNum");
const btnVal = document.querySelector("#btnVal");

const btnQuit = document.querySelector("#btnQuit");

let randomNumber = 0;
let limitCount = 0;

let playerInput = document.querySelector("#playerInput");
let playerResult = document.querySelector("#playerResult");
let scorePlayer = document.querySelector("#scorePlayer");
let lastNumber = document.querySelector("#lastNumber");
let btnReset = document.querySelector("#btnReset");

let resultCup = document.querySelector(".resultCup");
let cup = document.querySelector(".cup");
let cupTitle = document.querySelector(".cupTitle");

btnPlay.addEventListener("click", () => {
  document.querySelector(".containerDifficulties").style.display = "flex";
  document.querySelector(".containerIntro").style.display = "none";
});

btn100.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 99 + 1);
  limitCount = 100;
  playerResult.innerHTML = "0 > 100";
  document.querySelector(".containerDifficulties").style.display = "none";
  document.querySelector(".containerGame").style.display = "flex";
});

btn1000.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 999 + 1);
  limitCount = 1000;
  playerResult.innerHTML = "0 > 1000";
  document.querySelector(".containerDifficulties").style.display = "none";
  document.querySelector(".containerGame").style.display = "flex";
});

btn10000.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 9999 + 1);
  limitCount = 10000;
  playerResult.innerHTML = "0 > 10 000";
  document.querySelector(".containerDifficulties").style.display = "none";
  document.querySelector(".containerGame").style.display = "flex";
});

btnNum.forEach((btnNum) => {
  btnNum.addEventListener("click", () => {
    playerInput.innerHTML += btnNum.innerHTML;
  });
});

// document.addEventListener("keydown", () => {

// })

btnReset.addEventListener("click", () => {
  playerInput.innerHTML = "";
});

btnVal.addEventListener("click", () => {
  console.log(randomNumber);
  if (playerInput.innerHTML > 0 && playerInput.innerHTML < limitCount) {
    if (playerInput.innerHTML < randomNumber) {
      playerResult.innerHTML = "Plus haut";
      lastNumber.innerHTML = playerInput.innerHTML;
      scorePlayer.innerHTML++;
      playerInput.innerHTML = "";
    } else if (playerInput.innerHTML > randomNumber) {
      playerResult.innerHTML = "Plus bas";
      lastNumber.innerHTML = playerInput.innerHTML;
      scorePlayer.innerHTML++;
      playerInput.innerHTML = "";
    } else {
      if (limitCount == 100) {
        if (scorePlayer.innerHTML < 4) {
          cupResult("Incroyable", "Or", "gold", "silver", "bronze", "echec");
        } else if (scorePlayer.innerHTML < 8) {
          cupResult(
            "Pas mauvais",
            "Argent",
            "silver",
            "gold",
            "bronze",
            "echec"
          );
        } else if (scorePlayer.innerHTML < 12) {
          cupResult("moyen", "Bronze", "bronze", "silver", "gold", "echec");
        } else {
          cupResult("", "Echec", "echec", "silver", "gold", "bronze");
        }
      } else if (limitCount == 1000) {
        if (scorePlayer.innerHTML < 8) {
          cupResult("Incroyable", "Or", "gold", "silver", "bronze", "echec");
        } else if (scorePlayer.innerHTML < 12) {
          cupResult(
            "Pas mauvais",
            "Argent",
            "silver",
            "gold",
            "bronze",
            "echec"
          );
        } else if (scorePlayer.innerHTML < 16) {
          cupResult("moyen", "Bronze", "bronze", "silver", "gold", "echec");
        } else {
          cupResult("", "Echec", "echec", "silver", "gold", "bronze");
        }
      } else if (limitCount == 10000) {
        if (scorePlayer.innerHTML < 12) {
          cupResult("Incroyable", "Or", "gold", "silver", "bronze", "echec");
        } else if (scorePlayer.innerHTML < 16) {
          cupResult(
            "Pas mauvais",
            "Argent",
            "silver",
            "gold",
            "bronze",
            "echec"
          );
        } else if (scorePlayer.innerHTML < 20) {
          cupResult("moyen", "Bronze", "bronze", "silver", "gold", "echec");
        } else {
          cupResult("", "Echec", "echec", "silver", "gold", "bronze");
        }
      }
    }
  } else {
    playerInput.innerHTML = "";
  }
});

btnQuit.addEventListener("click", () => {
  document.querySelector(".containerCup").style.display = "none";
  document.querySelector(".containerIntro").style.display = "flex";
  scorePlayer.innerHTML = 0;
  playerInput.innerHTML = "";
  lastNumber.innerHTML = 0;
});

function cupResult(title, cupColor, color1, color2, color3, color4) {
  scorePlayer.innerHTML++;
  document.querySelector(".containerGame").style.display = "none";
  document.querySelector(".containerCup").style.display = "flex";
  resultCup.innerHTML = scorePlayer.innerHTML;
  cupTitle.innerHTML = title;
  cup.innerHTML = cupColor;
  cupChoice(color1, color2, color3, color4);
}

function cupChoice(cup1, cup2, cup3, cup4) {
  document.querySelector(".containerCup").classList.add(cup1);
  document.querySelector(".containerCup").classList.remove(cup2);
  document.querySelector(".containerCup").classList.remove(cup3);
  document.querySelector(".containerCup").classList.remove(cup4);
}
