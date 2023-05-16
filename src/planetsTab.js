import planetData from "./planetsData";

class Planet {
  constructor(image, outline, name, description) {
    this.image = image;
    this.name = name;
    this.outline = outline;
    this.description = description;
  }

  createHTMLElement() {
    const planetElement = document.createElement("div");
    planetElement.classList.add("planet");

    const imageContainer = document.createElement("div");
    imageContainer.setAttribute("class", "image-container");

    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", this.image);
    imageElement.setAttribute("alt", `Image of ${this.name}`);
    imageElement.setAttribute("class", "image");
    imageContainer.append(imageElement);

    const nameElement = document.createElement("h3");
    nameElement.textContent = this.name;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = this.description;

    if (!(this.outline === "none")) {
      const outlineElement = document.createElement("img");
      outlineElement.setAttribute("src", this.outline);
      outlineElement.setAttribute("alt", `Outline of ${this.name}`);
      outlineElement.setAttribute("class", "outline");
      imageContainer.append(outlineElement);
    }

    planetElement.append(imageContainer, nameElement, descriptionElement);

    return planetElement;
  }
}

const createPlanets = () => {
  const planetsSection = document.createElement("div");
  planetsSection.setAttribute("id", "planets");
  planetsSection.setAttribute("class", "content");

  const planetElements = planetData.map((data) => {
    const planet = new Planet(data.image, data.outline, data.name, data.description);
    return planet.createHTMLElement();
  });

  planetsSection.append(...planetElements);
  return planetsSection;
};

export default createPlanets;
