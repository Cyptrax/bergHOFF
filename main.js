import { dialog } from "./js/dialog.js";

const frigo = document.querySelector(".keuken-img-frigo");
const frigoInv = document.querySelector(".frigo");
const keuken = document.querySelector(".main-keuken");
const groentenplek = document.querySelector(".groenten");
const frigovenster = document.querySelector(".main-frigo");
const closeFrigo = document.querySelector(".close-frigo");
const microgolf = document.querySelector(".keuken-img-micro");
const diepvries = document.querySelector(".keuken-img-diepvries");
const diepvriesvenster = document.querySelector(".main-diepvries");
const closeDiepvries = document.querySelector(".close-diepvries");
const slaapkamerdeur = document.querySelector(".slaapkamer-deur");
const mainsection = document.querySelector(".main-section");
const slaapkamerterug = document.querySelector(".slaapkamer-terug");
const zoom = document.querySelector(".zoom");
const keukenzoom = document.querySelector(".main-keuken-zoom");
const terugkeuken = document.querySelector(".terug-zoom");
const kast = document.querySelector(".keuken-zoom-img-kast");
const kastkeuken = document.querySelector(".main-kast");
const closekast = document.querySelector(".close-kast");
const openItem = function (verborgen, zichtbaar) {
  verborgen.classList.add("hidden");
  zichtbaar.classList.remove("hidden");
};
const sluitItem = function (verborgen, zichtbaar) {
  zichtbaar.classList.remove("hidden");
  verborgen.classList.add("hidden");
};
frigo.addEventListener("click", () => openItem(keuken, frigovenster));
closeFrigo.addEventListener("click", () => sluitItem(frigovenster, keuken));
diepvries.addEventListener("click", () => openItem(keuken, diepvriesvenster));
closeDiepvries.addEventListener("click", () =>
  sluitItem(diepvriesvenster, keuken)
);
slaapkamerdeur.addEventListener("click", () => {
  openItem(mainsection, keuken),
    dialog.showDialog(
      "Uitleg keuken",
      "Op het bordje staan de gerechten die je nodig hebt. Laten we beginnen door de ingrediënten uit de koelkast te halen. Vervolgens moet je een keuze maken tussen drie messen die voor je liggen. Kies zorgvuldig, want elk mes heeft zijn eigen eigenschappen. Gebruik het mes door erop te klikken en begin met het snijden van de groenten. "
    );
});
slaapkamerterug.addEventListener("click", () => openItem(keuken, mainsection));
zoom.addEventListener("click", () => {
  openItem(keuken, keukenzoom),
    dialog.showDialog(
      "Uitleg Fornuis",
      "laten we eerst de juiste pan uit de kast halen. Zorg ervoor dat je de pan kiest die het beste past bij het gerecht dat we gaan bereiden. Vergeet niet om de dampkap aan te zetten om ervoor te zorgen dat we geen overmatige dampen in de keuken hebben." +
        "\n" +
        "Pas nadat je alle andere stappen hebt voltooid, kun je het vuur aansteken. Het is belangrijk om eerst alle voorbereidingen te treffen voordat we het kookproces beginnen. Laten we ervoor zorgen dat alles klaar staat voor een smakelijke en succesvolle kookervaring!"
    );
});
terugkeuken.addEventListener("click", () => openItem(keukenzoom, keuken));
kast.addEventListener("click", () => openItem(keukenzoom, kastkeuken));
closekast.addEventListener("click", () => openItem(kastkeuken, keukenzoom));

// document.addEventListener("DOMContentLoaded", function () {
//   fetchLeaderboard();
// });

// async function fetchLeaderboard() {
//   try {
//     const response = await fetch("fetch_leaderboard.php");
//     const data = await response.json();

//     const leaderboardTable = document.getElementById("leaderboardTable");
//     leaderboardTable.innerHTML = "";

//     data.forEach((entry, index) => {
//       const row = leaderboardTable.insertRow();
//       row.insertCell(0).textContent = index + 1;
//       row.insertCell(1).textContent = entry.PlayerName;
//       row.insertCell(2).textContent = entry.Score;
//       row.insertCell(3).textContent = entry.DateAchieved;
//     });
//   } catch (error) {
//     console.error("Error fetching leaderboard", error);
//   }
// }
