import planetData from "./planetsData";

class Planet {
  constructor(image, name, description) {
    this.image = image;
    this.name = name;
    this.description = description;
  }

  createHTMLElement() {
    const planetElement = document.createElement("div");
    planetElement.classList.add("planet");

    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", this.image);
    imageElement.setAttribute("alt", `Image of ${this.name}`);

    const nameElement = document.createElement("h3");
    nameElement.textContent = this.name;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = this.description;

    planetElement.append(imageElement, nameElement, descriptionElement);

    return planetElement;
  }
}

const createPlanets = () => {
  const planetsSection = document.createElement("div");
  planetsSection.setAttribute("id", "planets");
  planetsSection.setAttribute("class", "content");

  const planetElements = planetData.map((data) => {
    const planet = new Planet(data.image, data.name, data.description);
    return planet.createHTMLElement();
  });

  planetsSection.append(...planetElements);
  return planetsSection;
};

export default createPlanets;
