const createAbout = () => {
  const aboutSection = document.createElement("div");
  aboutSection.setAttribute("id", "about");
  aboutSection.setAttribute("class", "content");

  const aboutText = document.createElement("div");
  aboutText.setAttribute("id", "about-text");

  const first = document.createElement("div");
  first.setAttribute("class", "about-text-fragment");
  first.innerHTML =
    "Outer Wilds Ventures was founded by Feldspar, Gossan, Slate and Hornfels with the goal of exploring the Solar System to improve Hearthian understanding of the Solar System and of the Nomai, an ancient race that once lived here. It accomplishes this by training aspiring astronauts and equipping them with advanced space exploration technology. The recruits are then sent into space with the goal of learning about the Solar System, the mysterious Nomai, and to retrieve any artifacts they believe to be significant. ";

  aboutSection.append(aboutText);
  aboutText.append(first);

  return aboutSection;
};

export default createAbout;
