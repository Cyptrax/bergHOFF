import { Punten } from "./punten.js";
const buttonref = document.querySelector(".refresh");
const buttonmin = document.querySelector(".minpunten");
const totaalPunten = document.querySelector(".totaalPunten");
const eindpunten = document.querySelector(".eindscherm-punten");
const startpunten = document.querySelector(".end");

buttonref.addEventListener("click", () => window.location.reload());

startpunten.addEventListener("click", () => {
  buttonmin.innerText = Punten.showMinPunten() + " Punten verloren";
  totaalPunten.innerText = Punten.showPlusPunten() + " Punten gewonnen";
  eindpunten.innerText = Punten.showPunten() + "Totale Punten";
});

// console.log(Punten.showMinPunten());
// console.log(Punten.showPlusPunten());
