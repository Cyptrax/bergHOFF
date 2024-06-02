import { Punten } from "./punten.js";
import { fridge } from "./item.js";
import { dialog } from "./dialog.js";

const mes1 = document.querySelector("#mes-1");
const mes2 = document.querySelector("#mes-2");
const mes3 = document.querySelector("#mes-3");
const eten = document.querySelector(".groenten");
let buttons = eten.querySelectorAll(".button");
const finaleten = document.querySelector(".eten");
const zoomfinaleten = document.querySelector(".groeten-geschneden");
let count = 0;
let clickcount = 0;
let display = 0;

class Messen {
  counte = 0;
  replaced = 0;
  constructor() {}

  removeeten(buttons, eten) {
    if (buttons.length > 0) {
      eten.removeChild(buttons[0]);
    } else {
      // console.log("Geen knoppen meer om te verwijderen.");
    }
    return 1;
  }

  etenchecken(item) {
    // console.log(item);
    item.forEach((item) => {
      const img = document.createElement("img");
      const img2 = document.createElement("img");
      // console.log(this.counte);

      this.replaced = 1;

      if (this.counte >= 3) {
        // console.log("fuck");
        return;
      }

      if (item == "steak") {
        img.src = "./Images/cutted-meat-slice-icon-cartoon-removebg.png";
        img.alt = "steak";
        img2.src = "./Images/cutted-meat-slice-icon-cartoon-removebg.png";
        img2.alt = "steak";
        this.counte += 1;
        finaleten.appendChild(img);
        zoomfinaleten.appendChild(img2);
      } else if (item == "kip") {
        img.src = "./Images/chicken-cut-cartoon-removebg-preview.png";
        img.alt = "kip";
        img2.src = "./Images/chicken-cut-cartoon-removebg-preview.png";
        img2.alt = "kip";
        this.counte += 1;
        finaleten.appendChild(img);
        zoomfinaleten.appendChild(img2);
      } else if (item == "beacon") {
        img.src = "./Images/bacon-slice-icon-cartoon-removebg-preview.png";
        img.alt = "beacon";
        img2.src = "./Images/bacon-slice-icon-cartoon-removebg-preview.png";
        img2.alt = "beacon";
        this.counte += 1;
        finaleten.appendChild(img);
        zoomfinaleten.appendChild(img2);
      } else if (item == "sla") {
        img.src =
          "./Images/green-lettuce-leaf-product-cartoon-removebg-preview.png";
        img.alt = "sla";
        img2.src =
          "./Images/green-lettuce-leaf-product-cartoon-removebg-preview.png";
        img2.alt = "sla";
        this.counte += 1;
        finaleten.appendChild(img);
        zoomfinaleten.appendChild(img2);
      } else if (item == "tomaat") {
        img.src = "./Images/slices-of-tomato-removebg-preview.png";
        img.alt = "tomaat";
        img2.src = "./Images/slices-of-tomato-removebg-preview.png";
        img2.alt = "tomaat";
        this.counte += 1;
        finaleten.appendChild(img);
        zoomfinaleten.appendChild(img2);
      } else if (item == "komkommer") {
        img.src = "./Images/groene-komkommer-removebg-preview.png";
        img.alt = "komkommer";
        img2.src = "./Images/groene-komkommer-removebg-preview.png";
        img2.alt = "komkommer";
        this.counte += 1;
        finaleten.appendChild(img);
        zoomfinaleten.appendChild(img2);
      } else if (item == "wortel") {
        img.src = "./Images/cut-carrot-cartoon-removebg-preview.png";
        img.alt = "wortel";
        img2.src = "./Images/cut-carrot-cartoon-removebg-preview.png";
        img2.alt = "wortel";
        this.counte += 1;
        finaleten.appendChild(img);
        zoomfinaleten.appendChild(img2);
      }
    });
  }

  replaced() {
    return this.replaced;
  }
}

export const messen = new Messen();

mes1.addEventListener("click", () => {
  buttons = eten.querySelectorAll("button");
  // console.log("gebroken mes");

  if (display == 0) {
    dialog.showDialog(
      "Slechte keuze keuze",
      "Dit is de slechte keuze, dit is een gebroken met en hiermee gaat het heel slecht om eten mee te snijden"
    );
    display = 1;
  }

  if (count == 0) {
    Punten.minPunten(2);
    mes2.classList.add("hidden");
    mes3.classList.add("hidden");
    count = 1;
  } else {
    clickcount += messen.removeeten(buttons, eten);
  }
  if (clickcount == 3) {
    const k = fridge.returnitems();
    messen.etenchecken(k);
  }
});

mes2.addEventListener("click", () => {
  buttons = eten.querySelectorAll("button");
  // console.log("slecht mes");
  if (display == 0) {
    dialog.showDialog(
      "middelmatige keuze",
      "Dit is de redelijke keuze, dit is een mes dat niet geschikt is voor groenten of vlees te snijden."
    );
    display = 1;
  }

  if (count == 0) {
    Punten.plusPunten(0);
    mes1.classList.add("hidden");
    mes3.classList.add("hidden");
    count = 1;
  } else {
    if (!buttons.length) {
      // console.log("je moet al het eten op de tafel leggen");
      // console.log(buttons);
    } else {
      clickcount += messen.removeeten(buttons, eten);
    }
    if (clickcount == 3) {
      const k = fridge.returnitems();
      messen.etenchecken(k);
    }
  }
});

mes3.addEventListener("click", () => {
  buttons = eten.querySelectorAll("button");
  // console.log("goed mes");

  if (display == 0) {
    dialog.showDialog(
      "Goede keuze",
      "Dit is de goede keuze, dit is een mes van berghof. Dit is een goed scherp waardoor je veel gemakkelijker en sneller je eten kunt snijden"
    );
    display = 1;
  }

  if (count == 0) {
    Punten.plusPunten(2);
    mes1.classList.add("hidden");
    mes2.classList.add("hidden");
    count = 1;
  } else {
    if (!buttons.length) {
      // console.log("je moet al het eten op de tafel leggen");
      // console.log(buttons);
    } else {
      clickcount += messen.removeeten(buttons, eten);
    }
    if (clickcount == 3) {
      const k = fridge.returnitems();
      messen.etenchecken(k);
    }
  }
});
