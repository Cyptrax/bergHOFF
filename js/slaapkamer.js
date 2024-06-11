import { Punten } from "./punten.js";
import { dialog } from "./dialog.js";

const fig1 = document.querySelector(".fig-1");
const fig2 = document.querySelector(".fig-2");
const fig3 = document.querySelector(".fig-3");
const fig4 = document.querySelector(".fig-4");

let count1 = true;
let count2 = true;

setTimeout(() => {
  dialog.showDialog(
    "Game uitleg",
    "Het spel geeft je verschillende keuzes en je gaat goede en eco vriendelijke keuzen moeten maken om een hoge score te halen. Als je op deze pagina alle keuzes hebt gemaakt kan je doorgaan via de deur naar de volgende pagina"
  );
}, "1500");

fig1.addEventListener("click", () => {
  if (count1) {
    // console.log("1");
    Punten.plusPunten(2);
    fig2.classList.add("hidden");
    count1 = false;
    dialog.showDialog(
      "Goede keuze",
      "Dit is een uitstekende keuze: de Berghof fles. Deze herbruikbare fles is niet alleen milieuvriendelijk, maar ook duurzaam. Door te kiezen voor een Berghof fles draag je bij aan de vermindering van plastic afval, wat essentieel is voor het behoud van onze planeet."
    );
  }
});
fig2.addEventListener("click", () => {
  if (count1) {
    // console.log("2");
    Punten.minPunten(2);
    fig1.classList.add("hidden");
    count1 = false;
    dialog.showDialog(
      "Slechte keuze",
      "Dit is niet de juiste keuze: dit is geen product van Berghof. Deze fles is niet herbruikbaar en draagt bij aan een aanzienlijke hoeveelheid afval. In plaats van bij te dragen aan een schonere planeet, verergert het probleem van milieuvervuiling."
    );
  }
});
fig3.addEventListener("click", () => {
  if (count2) {
    // console.log("3");
    Punten.plusPunten(2);
    fig4.classList.add("hidden");
    count2 = false;
    dialog.showDialog(
      "Goede keuze",
      "Dit is de juiste keuze: een lunchbox van Berghof. Deze herbruikbare lunchbox is ontworpen met duurzaamheid in gedachten en helpt actief bij het verminderen van afval. Door te kiezen voor een herbruikbare lunchbox, draag je bij aan een schonere planeet door het gebruik van wegwerpmaterialen te vermijden."
    );
  }
});
fig4.addEventListener("click", () => {
  if (count2) {
    // console.log("4");
    Punten.minPunten(2);
    fig3.classList.add("hidden");
    count2 = false;
    dialog.showDialog(
      "Slechte keuze",
      "Dit is niet de juiste keuze: dit is geen product van Berghof. Deze brooddoos is niet herbruikbaar en draagt bij aan een aanzienlijke hoeveelheid afval. In plaats van bij te dragen aan een schonere planeet, verergert het probleem van milieuvervuiling."
    );
  }
});
