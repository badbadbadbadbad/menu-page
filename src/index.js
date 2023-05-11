import "./style.css";

function createHeader() {
  const header = document.createElement("div");
  header.setAttribute("id", "header");

  const headerText = document.createElement("div");
  headerText.setAttribute("id", "header-text");
  headerText.innerHTML = "Welcome.";
  header.appendChild(headerText);

  const buttons = document.createElement("div");
  buttons.setAttribute("id", "buttons");
  ["Home", "Planets", "About"].forEach((element) => {
    const btn = document.createElement("button");
    buttons.appendChild(btn);
    btn.setAttribute("class", "button");
    btn.innerHTML = element;
  });

  const selectionButtons = document.querySelectorAll(".button");

  for (let i = 0; i < selectionButtons.length; i = +1) {
    selectionButtons[i].onclick = () => {
      selectionButtons.forEach((btn) => {
        btn.style.backgroundColor = "black";
      });
      this.style.backgroundColor = "red";
    };
  }

  /*
  selectionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      selectionButtons.forEach((button) => {
        // button.style.borderBottom = "solid 2px #000000";
        button.style.backgroundColor = "rgb(0, 0, 0)";
      });
      // btn.style.borderBottom = "solid 2px white";
      this.style.backgroundColor = "rgb(200, 0, 0)";
    });
  });
  */

  header.appendChild(buttons);

  return header;
}

document.body.appendChild(createHeader());
