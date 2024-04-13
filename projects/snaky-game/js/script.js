//////////////// Constant ////////////////

// Btn
const btnGame = document.querySelector(".btnGame");

const btnPlayer1 = document.querySelector(".btnPlayer1");
const btnPlayer2 = document.querySelector(".btnPlayer2");

const btnExit = document.querySelector(".btnExit");

// Pawn
const playerPawn1 = document.querySelector(".playerPawn1");
const playerPawn2 = document.querySelector(".playerPawn2");

//////////////// Variable ////////////////

// Player
let countPlayer1 = 0;
let countPlayer2 = 0;
let turnPlayer = Math.floor(Math.random() * 2 + 1);

// Dice
let diceResult = document.querySelector(".diceResult");
let diceChangeResult = document.querySelector(".diceChangeResult");
let diceChoice = 6;
let dice = 0;

// Animation
let delayAnim = 0;

//////////////// relative constant ////////////////

const idPlayer1 = document.querySelector(".id" + countPlayer1);
const idPlayer2 = document.querySelector(".id" + countPlayer2);

//////////////// Intro ////////////////

btnGame.addEventListener("click", () => {
  document.querySelector(".animIntro1").classList.add("hiddenResult");
  setTimeout(() => {
    document.querySelector(".animIntro2").classList.add("hiddenResult");
  }, 200);
  setTimeout(() => {
    document.querySelector(".btnGame").classList.add("hiddenResult");
  }, 400);
  setTimeout(() => {
    document.querySelector(".containerIntro").classList.add("hiddenResult");
  }, 600);
  setTimeout(() => {
    document.querySelector(".containerIntro").style.display = "none";
  }, 800);
  setTimeout(() => {
    document.querySelector(".containerGame").classList.remove("hiddenResult");
    // Turn player
    if (turnPlayer == 1) {
      document.querySelector(".btnPlayer1").style.display = "block";
    } else {
      document.querySelector(".btnPlayer2").style.display = "block";
    }
  }, 1000);
});

//////////////// Result ////////////////

btnExit.addEventListener("click", () => {
  document.querySelector(".textResult").classList.add("showResult");
  setTimeout(() => {
    document.querySelector(".textResult").classList.add("hiddenResult");
    document.querySelector(".textResult").classList.remove("showResult");
  }, 1000);
  setTimeout(() => {
    document.querySelector(".containerResult").classList.add("hiddenResult");
  }, 1100);
  setTimeout(() => {
    location.reload();
  }, 1800);
});

//////////////// Game ////////////////

//////////////// Player 1 ////////////////

btnPlayer1.addEventListener("click", () => {
  delayAnim = 0;
  turnPlayer = 1;

  // btn hidden
  document.querySelector(".btnPlayer1").style.display = "none";

  // Dice
  document.querySelector(".containerDice").classList.add("showDice");
  tirage(diceChoice);
  setTimeout(() => {
    document.querySelector(".containerDice").classList.remove("showDice");
    document.querySelector(".playerPawn1").classList.remove("stylePawn1");
  }, 3000);

  // Game
  setTimeout(() => {
    game();

    // Condition up
    condition(4, 12, "+12", "green");
    condition(9, 17, "+17", "green");
    condition(11, 20, "+20", "green");
    condition(19, 17, "+17", "green");
    condition(21, 37, "+37", "green");
    condition(29, 17, "+17", "green");
    condition(50, 2, "+2", "green");

    // Condition down
    condition(22, -19, "-19", "red");
    condition(35, -30, "-30", "red");
    condition(42, -24, "-24", "red");
    condition(48, -41, "-41", "red");
    condition(54, -42, "-42", "red");
    condition(56, -19, "-19", "red");

    // Final condition
    finalCondition();
    if (countPlayer1 == 60) {
      document.querySelector(".screenResult").innerHTML = `${"Joueur 1"}`;
      setTimeout(() => {
        document.querySelector(".containerGame").classList.add("hiddenResult");
        setTimeout(() => {
          document.querySelector(".containerResult").style.display = "flex";
        }, 200);

        setTimeout(() => {
          document
            .querySelector(".containerResult")
            .classList.remove("hiddenResult");
        }, 400);
        setTimeout(() => {
          document
            .querySelector(".textResult")
            .classList.remove("hiddenResult");
        }, 600);
      }, 2500);
    }

    if (
      dice == 6 &&
      (countPlayer1 == 54 ||
        countPlayer2 == 54 ||
        countPlayer1 == 56 ||
        countPlayer2 == 56)
    ) {
      delayAnim = 4000;
    } else if (dice == 5 && (countPlayer1 == 54 || countPlayer2 == 54)) {
      delayAnim = 4000;
    }

    // btn show
    setTimeout(() => {
      if (dice == 6 && (countPlayer1 == 54 || countPlayer1 == 56)) {
        setTimeout(() => {
          if (dice == 6) {
            document.querySelector(".btnPlayer1").style.display = "block";
          } else {
            document.querySelector(".btnPlayer2").style.display = "block";
          }
          document.querySelector(".playerPawn1").classList.add("stylePawn1");
        }, 3000);
      } else if (dice == 5 && countPlayer1 == 54) {
        setTimeout(() => {
          if (dice == 6) {
            document.querySelector(".btnPlayer1").style.display = "block";
          } else {
            document.querySelector(".btnPlayer2").style.display = "block";
          }
          document.querySelector(".playerPawn1").classList.add("stylePawn1");
        }, 3000);
      } else {
        if (countPlayer1 == 60) {
          document.querySelector(".btnPlayer1").style.display = "none";
          document.querySelector(".btnPlayer2").style.display = "none";
        } else {
          if (dice == 6) {
            document.querySelector(".btnPlayer1").style.display = "block";
          } else {
            document.querySelector(".btnPlayer2").style.display = "block";
          }
          document.querySelector(".playerPawn1").classList.add("stylePawn1");
        }
      }
    }, 2000 + delayAnim);
  }, 3000 + delayAnim);
});

//////////////// Player 2 ////////////////

btnPlayer2.addEventListener("click", () => {
  delayAnim = 0;
  turnPlayer = 2;

  // btn hidden
  document.querySelector(".btnPlayer2").style.display = "none";

  // Dice
  document.querySelector(".containerDice").classList.add("showDice");
  tirage(diceChoice);
  setTimeout(() => {
    document.querySelector(".containerDice").classList.remove("showDice");
    document.querySelector(".playerPawn2").classList.remove("stylePawn2");
  }, 3000);

  // Game
  setTimeout(() => {
    game();

    // Condition up
    condition(4, 12, "+12", "green");
    condition(9, 17, "+17", "green");
    condition(11, 20, "+20", "green");
    condition(19, 17, "+17", "green");
    condition(21, 37, "+37", "green");
    condition(29, 17, "+17", "green");
    condition(50, 2, "+2", "green");

    // Condition down
    condition(22, -19, "-19", "red");
    condition(35, -30, "-30", "red");
    condition(42, -24, "-24", "red");
    condition(48, -41, "-41", "red");
    condition(54, -42, "-42", "red");
    condition(56, -19, "-19", "red");

    finalCondition();
    if (countPlayer2 == 60) {
      document.querySelector(".screenResult").innerHTML = `${"Joueur 2"}`;
      setTimeout(() => {
        document.querySelector(".containerGame").classList.add("hiddenResult");
        setTimeout(() => {
          document.querySelector(".containerResult").style.display = "flex";
        }, 200);

        setTimeout(() => {
          document
            .querySelector(".containerResult")
            .classList.remove("hiddenResult");
        }, 400);
        setTimeout(() => {
          document
            .querySelector(".textResult")
            .classList.remove("hiddenResult");
        }, 600);
      }, 2500);
    }

    // btn show
    setTimeout(() => {
      if (dice == 6 && (countPlayer2 == 54 || countPlayer2 == 56)) {
        setTimeout(() => {
          if (dice == 6) {
            document.querySelector(".btnPlayer2").style.display = "block";
          } else {
            document.querySelector(".btnPlayer1").style.display = "block";
          }
          document.querySelector(".playerPawn2").classList.add("stylePawn2");
        }, 3000);
      } else if (dice == 5 && countPlayer2 == 54) {
        setTimeout(() => {
          if (dice == 6) {
            document.querySelector(".btnPlayer2").style.display = "block";
          } else {
            document.querySelector(".btnPlayer1").style.display = "block";
          }
          document.querySelector(".playerPawn2").classList.add("stylePawn2");
        }, 3000);
      } else {
        if (countPlayer2 == 60) {
          document.querySelector(".btnPlayer1").style.display = "none";
          document.querySelector(".btnPlayer2").style.display = "none";
        } else {
          if (dice == 6) {
            document.querySelector(".btnPlayer2").style.display = "block";
          } else {
            document.querySelector(".btnPlayer1").style.display = "block";
          }
          document.querySelector(".playerPawn2").classList.add("stylePawn2");
        }
      }
    }, 2000 + delayAnim);
  }, 3000 + delayAnim);
});

//////////////// Function ////////////////

function game() {
  if (turnPlayer == 1) {
    countPlayer1 += dice;

    const idPlayer1 = document.querySelector(".id" + countPlayer1);
    const playerShift1 = playerPawn1.getBoundingClientRect();
    const idShift1 = idPlayer1.getBoundingClientRect();

    playerPawn1.style.top = `${playerShift1.top}px`;
    playerPawn1.style.left = `${playerShift1.left}px`;

    setTimeout(() => {
      playerPawn1.style.top = `${idShift1.top}px`;
      playerPawn1.style.left = `${idShift1.left}px`;
    }, 0);
  } else if (turnPlayer == 2) {
    countPlayer2 += dice;
    const idPlayer2 = document.querySelector(".id" + countPlayer2);
    const playerShift2 = playerPawn2.getBoundingClientRect();
    const idShift2 = idPlayer2.getBoundingClientRect();

    playerPawn2.style.top = `${playerShift2.top}px`;
    playerPawn2.style.left = `${playerShift2.left}px`;

    setTimeout(() => {
      playerPawn2.style.top = `${idShift2.top}px`;
      playerPawn2.style.left = `${idShift2.left}px`;
    }, 0);
  }
}

function condition(id, countPlayer, changeResult, textColor) {
  if (countPlayer1 == id) {
    delayAnim = 3000;
    setTimeout(() => {
      countPlayer1 += countPlayer;
      diceChangeResult.innerHTML = changeResult;
      const idPlayer1 = document.querySelector(".id" + countPlayer1);
      const playerShift1 = playerPawn1.getBoundingClientRect();
      const idShift1 = idPlayer1.getBoundingClientRect();

      playerPawn1.style.top = `${playerShift1.top}px`;
      playerPawn1.style.left = `${playerShift1.left}px`;
      document.querySelector(".containerDiceChange").style.color = textColor;
      document
        .querySelector(".containerDiceChange")
        .classList.add("showDiceChange");
      setTimeout(() => {
        document
          .querySelector(".containerDiceChange")
          .classList.remove("showDiceChange");
      }, 2000);
      setTimeout(() => {
        playerPawn1.style.top = `${idShift1.top}px`;
        playerPawn1.style.left = `${idShift1.left}px`;
      }, 0);
    }, 3000);
  } else if (countPlayer2 == id) {
    delayAnim = 3000;
    setTimeout(() => {
      countPlayer2 += countPlayer;
      diceChangeResult.innerHTML = changeResult;
      const idPlayer2 = document.querySelector(".id" + countPlayer2);
      const playerShift2 = playerPawn2.getBoundingClientRect();
      const idShift2 = idPlayer2.getBoundingClientRect();

      playerPawn2.style.top = `${playerShift2.top}px`;
      playerPawn2.style.left = `${playerShift2.left}px`;
      document.querySelector(".containerDiceChange").style.color = textColor;
      document
        .querySelector(".containerDiceChange")
        .classList.add("showDiceChange");
      setTimeout(() => {
        document
          .querySelector(".containerDiceChange")
          .classList.remove("showDiceChange");
      }, 2000);
      setTimeout(() => {
        playerPawn2.style.top = `${idShift2.top}px`;
        playerPawn2.style.left = `${idShift2.left}px`;
      }, 0);
    }, 3000);
  }
}

function finalCondition() {
  if (dice == 2) {
    condition(61, -2, "-1", "red");
  }

  if (dice == 3) {
    condition(61, -2, "-1", "red");
    condition(62, -4, "-2", "red");
  }
  if (dice == 4) {
    condition(61, -2, "-1", "red");
    condition(62, -4, "-2", "red");
    condition(63, -6, "-3", "red");
  }
  if (dice == 5) {
    condition(61, -2, "-1", "red");
    condition(62, -4, "-2", "red");
    condition(63, -6, "-3", "red");
    condition(64, -8, "-4", "red");

    setTimeout(() => {
      condition(54, -42, "-42", "red");
    }, 3000);
  }
  if (dice == 6) {
    condition(61, -2, "-1", "red");
    condition(62, -4, "-2", "red");
    condition(63, -6, "-3", "red");
    condition(64, -8, "-4", "red");
    condition(65, -10, "-5", "red");

    setTimeout(() => {
      condition(54, -42, "-42", "red");
      condition(56, -19, "-19", "red");
    }, 3000);
  }
}

function tirage(diceChoice) {
  let countTime = 1;
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
    dice = Math.floor(Math.random() * diceChoice + 1);
    diceResult.innerHTML = dice;
  }, countTime);
  countTime /= 0.65;
}
