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
    "Het spel geeft je verschillende keuzes en je gaat goede en eco vriendelijke keuzen moeten maken om een hoge score te halen. Als je op deze pagina alle keuzes hebt gemaakt kun ge doorgaan via de deur naar de volgende pagina"
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
      "Dit is de goede keuze, dit is een fles van berghof. Dit is een herbruikbare fles die geen afval uitstoot"
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
      "Dit is de geen goede keuze, dit is geen item van berghof. Dit is een niet herbruikbare fles die veel afval uitstoot"
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
      "Dit is de goede keuze, dit is een lunchbox van berghof. Dit is een herbruikbare fles die geen afval uitstoot"
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
      "Dit is de geen goede keuze, dit is geen item van berghof. Dit is een niet herbruikbare brooddoos die veel afval uitstoot"
    );
  }
});
