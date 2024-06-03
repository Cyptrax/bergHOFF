import { messen } from "./messen.js";
import { dampkapaan } from "./dampkap.js";
import { closet } from "./item.js";
import { Punten } from "./punten.js";
import { dialog } from "./dialog.js";

const vuur = document.querySelector(".vuur-aan");
const etensnijden = document.querySelector(".groeten-geschneden");
let etenbuttons = etensnijden.querySelectorAll("img");
const etenshow = document.querySelector(".showeten");

let x = 0;

vuur.addEventListener("click", () => {
  etenbuttons = etensnijden.querySelectorAll("img");
  if (messen.replaced == 0) {
    // console.log("messen");
    dialog.showDialog(
      "Stap overgeslaan",
      "Je hebt nog niet al het eten gesneden!"
    );
    return;
  }

  if (!dampkapaan) {
    // console.log("dampkap");
    dialog.showDialog("Stap overgeslaan", "Je moet de dampkap aanzetten!");
    return;
  }

  if (closet.checkPan() == 0) {
    // console.log("pan");
    dialog.showDialog("Stap overgeslaan", "Je moet een pan op het vuur zetten");
    return;
  }

  // if (1 == 1) {
  //   console.log(closet.returnPan().name);
  // }

  if (closet.returnPan().name == "vuile-pan") {
    // console.log("1");
    x = kookplaat.removeItems(etensnijden, etenbuttons);
    // console.log(x);
    if (x == 1) {
      kookplaat.showEten(closet.returnPan().name, etenshow);
      dialog.enDialog(
        "Slecht eten",
        "Oh nee, je hebt niet het perfecte gerecht bereid! Het lijkt erop dat je een vuile en slechte pan hebt gebruikt. Laten we doorgaan naar de eindpunten en het nog een keer proberen!"
      );
    }
  } else if (closet.returnPan().name == "mid-pan") {
    // console.log("2");
    x = kookplaat.removeItems(etensnijden, etenbuttons);
    // console.log(x);
    if (x == 1) {
      kookplaat.showEten(closet.returnPan().name, etenshow);
      dialog.enDialog(
        "Mild eten",
        "Je hebt goed eten gekookt, maar het had nog beter gekund als je een pot van Berghof had gebruikt! Laten we doorgaan naar de eindpunten en ontdekken hoe we onze kookkunsten kunnen verbeteren met de hoogwaardige kookgerei van Berghof!"
      );
    }
  } else if (closet.returnPan().name == "goeie-pot") {
    // console.log("3");
    x = kookplaat.removeItems(etensnijden, etenbuttons);
    // console.log(x);
    if (x == 1) {
      kookplaat.showEten(closet.returnPan().name, etenshow);
      dialog.enDialog(
        "Perfect eten",
        "Fantastisch! Je hebt een heerlijke maaltijd bereid met behulp van de hoogwaardige Berghof kookgerei. Met Berghof kun je moeiteloos koken en genieten van geweldige resultaten in de keuken. Ga verder om je eindpunten te bekijken!"
      );
    }
  }
});

class Kookplaat {
  counte = 0;
  constructor() {}

  removeItems(top, etenbuttons) {
    if (etenbuttons.length > 0) {
      top.removeChild(etenbuttons[0]);
    } else {
      // console.log("Geen knoppen meer om te verwijderen.");
    }
    return 1;
  }

  showEten(pan, place) {
    const img = document.createElement("img");

    // console.log(pan);

    if (this.counte >= 1) {
      // console.log("fuck");
      return;
    }

    if (pan == "vuile-pan") {
      img.src = "./Images/eten-slecht.png";
      img.alt = "slecht eten";
      this.counte += 1;
    } else if (pan == "mid-pan") {
      img.src = "./Images/eten-mid.avif";
      img.alt = "mid eten";
      this.counte += 1;
    } else if (pan == "goeie-pot") {
      img.src = "./Images/eten-goed.png";
      img.alt = "Goed eten";
      this.counte += 1;
    }
    place.appendChild(img);
  }
}

const kookplaat = new Kookplaat();
