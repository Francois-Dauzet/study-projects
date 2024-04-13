/////////////////// Constantes /////////////////////
const buttonNum = document.querySelectorAll("#btnNum");
const buttonOpe = document.querySelectorAll("#btnOpe");
const buttonVal = document.querySelector("#btnVal");
const buttonRes = document.querySelector("#btnRes");

const tabOperateurs = [
  { operation: somme, operateur: "+" },
  { operation: multiplication, operateur: "*" },
  { operation: division, operateur: "/" },
  { operation: soustraction, operateur: "-" },
];

let totalSaisie = document.querySelector(".screenResult");

///////////////////// Fonctions //////////////////////
stockFormule = [];

function somme(i, j) {
  return i + j;
}

function soustraction(i, j) {
  return i - j;
}

function multiplication(i, j) {
  return i * j;
}

function division(i, j) {
  return i / j;
}

////////////////// Evenement au clic //////////////////////
buttonNum.forEach((btnNum) => {
  btnNum.addEventListener("click", () => {
    totalSaisie.innerHTML += btnNum.innerHTML;
  });
});

buttonOpe.forEach((btnOpe) => {
  btnOpe.addEventListener("click", () => {
    totalSaisie.innerHTML += btnOpe.innerHTML;
  });
});

buttonRes.addEventListener("click", () => {
  totalSaisie.innerHTML = "";
});

buttonVal.addEventListener("click", () => {
  for (let i = 0; i < tabOperateurs.length; i++) {
    if (totalSaisie.innerHTML.indexOf(tabOperateurs[i].operateur) != -1) {
      stockFormule = totalSaisie.innerHTML.split(tabOperateurs[i].operateur);
      totalSaisie.innerHTML = tabOperateurs[i].operation(
        parseFloat(stockFormule[0]),
        parseFloat(stockFormule[1])
      );
    }
  }
});
