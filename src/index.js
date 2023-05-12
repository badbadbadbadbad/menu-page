import "./style.css";

function createHeader() {
  const header = document.createElement("div");
  header.setAttribute("id", "header");

  // Welcome text
  const headerText = document.createElement("div");
  headerText.setAttribute("id", "header-text");
  headerText.innerHTML = "Discover.";
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

function createHome() {
  const homeSection = document.createElement("div");
  homeSection.setAttribute("id", "home");

  const homeText = document.createElement("div");
  homeText.setAttribute("id", "home-text");

  const first = document.createElement("div");
  first.setAttribute("class", "home-text-fragment");
  first.innerHTML =
    "Welcome to our humble corner of the universe. Here, amid the vast expanse of space, we have made our home. It's a place where the wonders of the cosmos are our constant companions, and the beauty of the stars shines down upon us every night. We invite you to join us on a journey through our solar system and explore the mysteries that lie beyond our reach.";

  const second = document.createElement("div");
  second.setAttribute("class", "home-text-fragment");
  second.innerHTML =
    "Take a moment to gaze upon the endless void and reflect upon the vastness of space. It can be overwhelming to comprehend the scale of the universe and our place in it. But in this infinitesimal moment, on this tiny planet, we have the power to make a difference. Together, we can seek out the secrets of the cosmos and discover the hidden wonders of our own solar system. Let us embark on this journey together and see where the stars may take us.";

  homeSection.append(homeText);
  homeText.append(first, second);

  return homeSection;
}

function createFooter() {
  const footerSection = document.createElement("div");
  footerSection.setAttribute("id", "footer");

  const footerText = document.createElement("div");
  footerText.setAttribute("id", "header-text");
  footerText.innerHTML = "© 2023 Mobius Interactive";
  footerSection.appendChild(footerText);

  return footerSection;
}

document.body.appendChild(createHeader());
document.body.appendChild(createHome());
document.body.appendChild(createFooter());
