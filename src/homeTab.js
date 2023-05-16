const createHome = () => {
  const homeSection = document.createElement("div");
  homeSection.setAttribute("id", "home");
  homeSection.setAttribute("class", "content");

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
};

export default createHome;
