import "./style.css";
// import createHome from "./homeTab";
import createPlanets from "./planetsTab";
// import createAbout from "./aboutTab";

function createHeader() {
  const header = document.createElement("div");
  header.setAttribute("id", "header");

  // Welcome text
  const headerText = document.createElement("div");
  headerText.setAttribute("id", "header-text");
  headerText.innerHTML = "Hearthspace";
  header.appendChild(headerText);

  // Navigation buttons
  const buttonsElement = document.createElement("div");
  buttonsElement.setAttribute("id", "buttons");
  ["Home", "Planets", "About"].forEach((element, index) => {
    const btn = document.createElement("button");
    btn.setAttribute("class", "button");
    btn.innerHTML = element;

    // First button should be the default select
    if (index === 0) {
      btn.classList.add("selected");
    }

    buttonsElement.appendChild(btn);

    // Currently selected button underline
    btn.addEventListener("click", () => {
      const buttonsGroup = document.querySelectorAll(".button");
      buttonsGroup.forEach((button) => {
        button.classList.remove("selected");
      });

      btn.classList.add("selected");
    });
  });

  header.appendChild(buttonsElement);

  return header;
}

function createFooter() {
  const footerSection = document.createElement("div");
  footerSection.setAttribute("id", "footer");

  const footerText = document.createElement("div");
  footerText.setAttribute("id", "header-text");
  footerText.innerHTML = "Art and Game content © 2019 Mobius Interactive";
  footerSection.appendChild(footerText);

  return footerSection;
}

document.body.appendChild(createHeader());
// document.body.appendChild(createHome());
document.body.appendChild(createPlanets());
// document.body.appendChild(createAbout());
document.body.appendChild(createFooter());
