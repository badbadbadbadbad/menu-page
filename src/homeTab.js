const createHome = () => {
  const homeSection = document.createElement("div");
  homeSection.setAttribute("id", "home");
  homeSection.setAttribute("class", "content");

  const homeText = document.createElement("div");
  homeText.setAttribute("id", "home-text");

  const first = document.createElement("div");
  first.setAttribute("class", "home-text-fragment");
  first.innerHTML =
    "Welcome, fellow spacefarer! We are the Hearthians, a curious and adventurous race who call the quaint little planet of Timber Hearth our home. Our love for exploration and discovery led us to seek out the mysteries hidden within our Solar System, and in doing so, we developed more advanced technology based on the Nomai artifacts we have discovered.";

  const second = document.createElement("div");
  second.setAttribute("class", "home-text-fragment");
  second.innerHTML =
    "Through our travels, we have come to appreciate the beauty and fragility of our universe. We have also learned that knowledge and understanding can help us protect it. And that's why we invite you to join us on this journey of discovery. Explore our website and learn about the planets and astral bodies we've encountered. Who knows what wonders you might find?";

  homeSection.append(homeText);
  homeText.append(first, second);

  return homeSection;
};

export default createHome;
