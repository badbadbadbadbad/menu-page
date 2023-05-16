const createAbout = () => {
  const aboutSection = document.createElement("div");
  aboutSection.setAttribute("id", "about");
  aboutSection.setAttribute("class", "content");

  const aboutText = document.createElement("div");
  aboutText.setAttribute("id", "about-text");

  const first = document.createElement("div");
  first.setAttribute("class", "about-text-fragment");
  first.innerHTML =
    "Outer Wilds Ventures was established by a group of ambitious explorers - Feldspar, Gossan, Slate, and Hornfels - with a common purpose in mind: to delve into the depths of our Solar System, increase our knowledge of the ancient Nomai civilization, and uncover the secrets that the universe holds. To achieve this goal, we train young astronauts and equip them with cutting-edge space exploration technology before sending them out into the great unknown. The recruits are tasked with learning all they can about our Solar System, studying the cryptic Nomai artifacts, and recovering any items that they deem of value.";

  aboutSection.append(aboutText);
  aboutText.append(first);

  return aboutSection;
};

export default createAbout;
