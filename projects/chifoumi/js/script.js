/// Création des constantes / Récupération des id dans la page html
const buttonP = document.getElementById("buttonP");
const buttonF = document.getElementById("buttonF");
const buttonC = document.getElementById("buttonC");
const buttonR = document.getElementById("buttonR");
const buttonL = document.getElementById("buttonL");
const buttonS = document.getElementById("buttonS");

/// Création des constantes d'images joueur pour les afficher ou non
const pierrePlayerImg = document.getElementById("pierrePlayerImg");
const feuillePlayerImg = document.getElementById("feuillePlayerImg");
const ciseauxPlayerImg = document.getElementById("ciseauxPlayerImg");

/// Création des constantes d'images ordinateur pour les afficher ou non
const pierreOrdinateurImg = document.getElementById("pierreOrdinateurImg");
const feuilleOrdinateurImg = document.getElementById("feuilleOrdinateurImg");
const ciseauxOrdinateurImg = document.getElementById("ciseauxOrdinateurImg");

/// Variables
let playerChoice = 0;
let computerChoice = 0;
let playerScore = 0;
let computerScore = 0;

buttonP.addEventListener("click", () => {
  playerImg("#pierrePlayerImg", "#ciseauxPlayerImg", "#feuillePlayerImg");
  playerChoice = 1;
  computerChoice = Math.floor(Math.random() * 3 + 1);
  computerImg();
  result();
  document.querySelector(".joueurPoints").innerHTML = `${playerScore}`;
  document.querySelector(".ordinateurPoints").innerHTML = `${computerScore}`;

  resultMatch();
});

buttonF.addEventListener("click", () => {
  playerImg("#feuillePlayerImg", "#ciseauxPlayerImg", "#pierrePlayerImg");
  playerChoice = 2;
  computerChoice = Math.floor(Math.random() * 3 + 1);
  computerImg();
  result();
  document.querySelector(".joueurPoints").innerHTML = `${playerScore}`;
  document.querySelector(".ordinateurPoints").innerHTML = `${computerScore}`;
  resultMatch();
});

buttonC.addEventListener("click", () => {
  playerImg("#ciseauxPlayerImg", "#feuillePlayerImg", "#pierrePlayerImg");
  playerChoice = 3;
  computerChoice = Math.floor(Math.random() * 3 + 1);
  computerImg();
  result();
  document.querySelector(".joueurPoints").innerHTML = `${playerScore}`;
  document.querySelector(".ordinateurPoints").innerHTML = `${computerScore}`;
  resultMatch();
});

buttonR.addEventListener("click", () => {
  playerChoice = 0;
  computerChoice = 0;
  playerScore = 0;
  computerScore = 0;
  computerRemoveImg();
  playerRemoveImg();
  document.querySelector(".containerBtnChoix").style.display = "flex";
  document.querySelector(".containerBtnEnd").style.display = "none";
  document.querySelector(".resultat").innerHTML = `Go`;
  document.querySelector(".resultat").style.color = "black";
  document.querySelector(".joueurPoints").innerHTML = `${playerScore}`;
  document.querySelector(".ordinateurPoints").innerHTML = `${computerScore}`;
});

buttonL.addEventListener("click", () => {
  playerChoice = 0;
  computerChoice = 0;
  playerScore = 0;
  computerScore = 0;
  computerRemoveImg();
  playerRemoveImg();
  document.querySelector(".containerBtnEnd").style.display = "none";
  document.querySelector(".containerGame").style.display = "none";
  document.querySelector(".containerIntro").style.display = "block";
  document.querySelector(".printScore").style.display = "none";
  document.querySelector(".containerHeader").style.display = "none";
  document.querySelector(".resultat").innerHTML = `Go`;
  document.querySelector(".resultat").style.color = "black";
  document.querySelector(".joueurPoints").innerHTML = `${playerScore}`;
  document.querySelector(".ordinateurPoints").innerHTML = `${computerScore}`;
});

buttonS.addEventListener("click", () => {
  document.querySelector(".containerBtnEnd").style.display = "none";
  document.querySelector(".containerGame").style.display = "block";
  document.querySelector(".containerIntro").style.display = "none";
  document.querySelector(".printScore").style.display = "flex";
  document.querySelector(".containerHeader").style.display = "block";
  document.querySelector(".containerBtnChoix").style.display = "flex";
  document.querySelector(".joueurPoints").innerHTML = `${playerScore}`;
  document.querySelector(".ordinateurPoints").innerHTML = `${computerScore}`;
});

function playerImg(addCard, removeCard1, removeCard2) {
  document.querySelector(addCard).classList.add("showCard");
  document.querySelector(removeCard1).classList.remove("showCard");
  document.querySelector(removeCard2).classList.remove("showCard");
}

function computerImg() {
  if (computerChoice == 1) {
    computerSelectImg(
      "#pierreOrdinateurImg",
      "#feuilleOrdinateurImg",
      "#ciseauxOrdinateurImg"
    );
  } else if (computerChoice == 2) {
    computerSelectImg(
      "#feuilleOrdinateurImg",
      "#pierreOrdinateurImg",
      "#ciseauxOrdinateurImg"
    );
  } else if (computerChoice == 3) {
    computerSelectImg(
      "#ciseauxOrdinateurImg",
      "#feuilleOrdinateurImg",
      "#pierreOrdinateurImg"
    );
  }
}

function computerSelectImg(addCard, removeCard1, removeCard2) {
  document.querySelector(addCard).classList.add("showCard");
  document.querySelector(removeCard1).classList.remove("showCard");
  document.querySelector(removeCard2).classList.remove("showCard");
}

function computerRemoveImg() {
  document.querySelector("#ciseauxOrdinateurImg").classList.remove("showCard");
  document.querySelector("#feuilleOrdinateurImg").classList.remove("showCard");
  document.querySelector("#pierreOrdinateurImg").classList.remove("showCard");
}

function playerRemoveImg() {
  document.querySelector("#ciseauxPlayerImg").classList.remove("showCard");
  document.querySelector("#feuillePlayerImg").classList.remove("showCard");
  document.querySelector("#pierrePlayerImg").classList.remove("showCard");
}

function resultMatch() {
  if (playerScore == 3) {
    document.querySelector(".containerBtnChoix").style.display = "none";
    document.querySelector(".resultat").innerHTML = `Vous avez gagné la partie`;
    document.querySelector(".resultat").style.color = "green";
    document.querySelector(".containerBtnEnd").style.display = "flex";
  } else if (computerScore == 3) {
    document.querySelector(".containerBtnChoix").style.display = "none";
    document.querySelector(".resultat").innerHTML = `Vous avez perdu la partie`;
    document.querySelector(".resultat").style.color = "red";
    document.querySelector(".containerBtnEnd").style.display = "flex";
  }
}

function result() {
  if (
    (computerChoice == 1 && playerChoice == 3) ||
    (computerChoice == 2 && playerChoice == 1) ||
    (computerChoice == 3 && playerChoice == 2)
  ) {
    document.querySelector(".resultat").innerHTML = `Perdu`;
    document.querySelector(".resultat").style.color = "red";
    computerScore += 1;
  } else if (computerChoice == playerChoice) {
    document.querySelector(".resultat").innerHTML = `Egalité`;
  } else {
    document.querySelector(".resultat").innerHTML = `Gagné`;
    document.querySelector(".resultat").style.color = "green";
    playerScore += 1;
  }
}
