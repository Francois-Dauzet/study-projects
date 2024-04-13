/////////////////// Const ///////////////////

// Intro / End
const btnStart = document.querySelector("#btnStart");

// Choix du niveau de difficulté
const btnDifficulty = document.querySelector("#btnDifficulty");
const btnEasy = document.querySelector("#btnEasy");
const btnMedium = document.querySelector("#btnMedium");
const btnHard = document.querySelector("#btnHard");

// Choix joueur
const btnGame = document.querySelector("#btnGame");
const btnCard = document.querySelector("#btnCard");
const btnStay = document.querySelector("#btnStay");

// Hand
const totalHand = document.querySelector(".containerTotalHand");
const containerCard = document.querySelector(".containerCard");
const totalScreen = document.querySelector(".totalHand");

const c1 = document.querySelector("#c1");

/////////////////// Var ///////////////////

let difficultyChoice = "";
let totalComputer = 0;
let totalPlayer = 0;
let scoreComputer = 0;
let scorePlayer = 0;
let cardCount = 1;
let resetCardCount = 0;
let testDoubl = false;

/////////////////// Tab ///////////////////

let cardPlayer = [];

/////////////////// Event ///////////////////

// Intro
btnStart.addEventListener("click", () => {
  document.querySelector(".containerGame").style.display = "flex";
  document.querySelector(".containerIntro").style.display = "none";
  for (i = 6; i > 0; i--) {
    document.querySelector("#c" + i).style.transform = "scaleX(1)";
    document.querySelector("#c" + i).style.filter = "opacity(1)";
    document.querySelector("#c" + i).innerHTML = `${i}`;
  }
});

// Choix du niveau de difficulté
// Facile
btnEasy.addEventListener("click", () => {
  difficulties("Niveau : Facile", "green", "1");
});

// Moyen
btnMedium.addEventListener("click", () => {
  difficulties("Niveau : Moyen", "orange", "2");
});

// Difficile
btnHard.addEventListener("click", () => {
  difficulties("Niveau : Difficile", "red", "3");
});

// Game Play
// Bouton carte
const validCard = () => {
  const randomCard = Math.floor(Math.random() * 9 + 1);
  const verifCard = cardPlayer.includes(randomCard);
  if (verifCard) {
    return validCard();
  } else {
    return randomCard;
  }
};

// Version ternaire
// const validCard = () => {
//   const randomCard = Math.floor(Math.random() * 10 + 1);
//   return cardPlayer.includes(randomCard) ? validCard() : randomCard;
// };

btnCard.addEventListener("click", () => {
  document.querySelector("#btnStay").style.display = "flex";
  document.querySelector(".containerCard").style.display = "flex";
  document.querySelector(".containerResult").style.display = "none";

  cardPlayer.push(validCard());

  if (cardCount <= 6) {
    document.querySelector("#c" + cardCount).innerHTML = `${
      cardPlayer[cardCount - 1]
    }`;
    document.querySelector("#c" + cardCount).style.transform = "scaleX(1)";
    document.querySelector("#c" + cardCount).style.filter = "opacity(1)";
    totalPlayer += cardPlayer[cardCount - 1];
    document.querySelector("#totalHand").innerHTML = `${totalPlayer}`;
    cardCount++;
  }
  if (totalPlayer < 21) {
    document.querySelector(".containerTotalHand").style.border =
      "4px solid green";
  } else if (totalPlayer == 21) {
    document.querySelector(".containerTotalHand").style.border =
      "4px solid gold";
  } else {
    document.querySelector(".containerTotalHand").style.border =
      "4px solid red";
  }
});

// Bouton rester
btnStay.addEventListener("click", () => {
  document.querySelector("#btnStay").style.display = "none";

  if (difficultyChoice == "1") {
    totalComputer = Math.floor(Math.random() * 14 + 12);
  } else if (difficultyChoice == "2") {
    totalComputer = Math.floor(Math.random() * 10 + 14);
  } else {
    totalComputer = Math.floor(Math.random() * 6 + 16);
  }

  if (
    (totalComputer < totalPlayer && totalPlayer <= 21) ||
    (totalComputer > 21 && totalComputer > totalPlayer)
  ) {
    scorePlayer += 1;
    document.querySelector("#screenResult").innerHTML = `Vous avez gagné`;
    document.querySelector("#screenResult").style.color = "green";
    document.querySelector("#screenResult").style.border = "5px solid green";
  } else if (totalPlayer == totalComputer) {
    document.querySelector("#screenResult").innerHTML = `Egalité`;
    document.querySelector("#screenResult").style.color = "lightGray";
    document.querySelector("#screenResult").style.border =
      "5px solid lightGray";
  } else {
    scoreComputer += 1;
    document.querySelector("#screenResult").innerHTML = `Vous avez perdu`;
    document.querySelector("#screenResult").style.color = "red";
    document.querySelector("#screenResult").style.border = "5px solid red";
  }
  if (totalComputer < 21) {
    document.querySelector("#resultComputeur").style.border = "4px solid green";
  } else if (totalComputer == 21) {
    document.querySelector("#resultComputeur").style.border = "4px solid gold";
  } else {
    document.querySelector("#resultComputeur").style.border = "4px solid red";
  }

  if (3 == scorePlayer) {
    endGameResult(
      "#screenPlayer",
      scorePlayer,
      "Vous avez Gagné la partie",
      "gold",
      "5px solid gold"
    );
  } else if (3 == scoreComputer) {
    endGameResult(
      "#screenComputer",
      scoreComputer,
      "Vous avez perdu la partie",
      "red",
      "5px solid red"
    );
  } else {
    document.querySelector(".containerCard").style.display = "none";
    document.querySelector(".containerResult").style.display = "flex";
    document.querySelector("#resultComputeur").innerHTML = `${totalComputer}`;
    document.querySelector("#screenPlayer").innerHTML = `${scorePlayer}`;
    document.querySelector("#screenComputer").innerHTML = `${scoreComputer}`;
  }
  // Reset Card
  totalPlayer = 0;
  cardPlayer = [];
  for (i = cardCount; i > 0; i--) {
    document.querySelector("#c" + i).innerHTML = `${resetCardCount}`;
    document.querySelector("#c" + i).style.transform = "scaleX(0)";
    document.querySelector("#c" + i).style.filter = "opacity(0)";
  }
  cardCount = 1;
  // screen Result
});

/////////////////////// function ///////////////////////

function difficulties(textDifficulty, colorDifficulty, choiceDifficulty) {
  document.querySelector(".containerScore").style.display = "flex";
  btnDifficulty.style.display = "none";
  totalHand.style.display = "flex";
  btnGame.style.display = "flex";
  difficultyText.style.display = "block";
  containerCard.style.display = "flex";
  document.querySelector("#difficultyText").innerHTML = `${textDifficulty}`;
  document.querySelector("#difficultyText").style.color = colorDifficulty;
  difficultyChoice = choiceDifficulty;
  for (i = 6; i > 0; i--) {
    document.querySelector("#c" + i).style.transform = "scaleX(0)";
    document.querySelector("#c" + i).style.filter = "opacity(0)";
  }
}

function endGameResult(screen, score, message, color, border) {
  document.querySelector(screen).innerHTML = `${score}`;
  document.querySelector(screen).innerHTML = `${score}`;
  document.querySelector(".containerCard").style.display = "none";
  document.querySelector(".containerBtnGame").style.display = "none";
  document.querySelector(".containerResult").style.display = "flex";
  document.querySelector("#screenResult").innerHTML = `${message}`;
  document.querySelector("#screenResult").style.color = color;
  document.querySelector("#screenResult").style.border = border;
  document.querySelector(".containerBtnEnd").style.display = "block";
  document.querySelector("#resultComputeur").innerHTML = `${totalComputer}`;
}
