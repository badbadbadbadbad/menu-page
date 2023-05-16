import "./style.css";
import createHome from "./homeTab";
import createPlanets from "./planetsTab";
import createAbout from "./aboutTab";

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

    let currentTab;
    btn.addEventListener("click", () => {
      // Remove button underlines
      const buttonsGroup = document.querySelectorAll(".button");
      buttonsGroup.forEach((button) => {
        button.classList.remove("selected");
      });

      // Add underline to clicked button
      btn.classList.add("selected");

      // Unload current tab
      const currentContent = document.getElementById(document.body.querySelector(".content").id);
      document.body.removeChild(currentContent);

      // Load correct tab
      if (element === "Home") {
        currentTab = createHome();
      } else if (element === "Planets") {
        currentTab = createPlanets();
      } else if (element === "About") {
        currentTab = createAbout();
      }

      document.body.insertBefore(currentTab, document.getElementById("footer"));
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
  footerText.innerHTML = "Art and Game content © 2019 Mobius Digital";
  footerSection.appendChild(footerText);

  return footerSection;
}

document.body.appendChild(createHeader());
document.body.appendChild(createHome());
document.body.appendChild(createFooter());
