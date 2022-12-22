// About Section
export const aboutSection = () => {
  // Creating element on about section
  const about = document.createElement("section");

  //   Adding content for about section
  const aboutP = document.createElement("p");
  aboutP.textContent = `Puchi Restaurant's custom made wine is prepared with fresh ingredients daily. Not in the mood for a wine? Choose what you want to have from our menu. Why not give us a try when you're looking to either grab a quick bite, or hang around for "wines and Beers" with the guys... or ladies... of course!!!
            You know when you go out of town to visit a good friend and they take you to a great local hangout where the drink is great and the vibe is relaxed, fun and exciting? Yeah, that’s Puchi Restaurant!`;
  about.classList.add("section");

  // Adding name for about section
  const name = document.createElement("p");
  name.textContent = "Yuresh Majhi";
  name.classList.add("name");

  //   Adding everything to about section
  about.appendChild(aboutP);
  about.appendChild(name);

  return about;
};
