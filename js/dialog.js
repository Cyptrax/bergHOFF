const next = document.querySelector(".next");
const end = document.querySelector(".end");
const dialogsec = document.querySelector(".dialog");
const titel = dialogsec.querySelector("h2");
const text = dialogsec.querySelector("p");
const eindscherm = document.querySelector(".eindscherm");
const mainkeuken = document.querySelector(".main-keuken-zoom");

next.addEventListener("click", () => {
  dialogsec.classList.add("hidden");
});
end.addEventListener("click", () => {
  dialogsec.classList.add("hidden");
  eindscherm.classList.remove("hidden");
  mainkeuken.classList.add("hidden");
});

class Dialog {
  constructor() {}

  showDialog(h2, p) {
    dialogsec.classList.remove("hidden");
    titel.textContent = h2;
    text.textContent = p;
  }

  enDialog(h2, p) {
    dialogsec.classList.remove("hidden");
    titel.textContent = h2;
    text.textContent = p;
    end.classList.remove("hidden");
    next.classList.add("hidden");
  }
}

export const dialog = new Dialog();
