// Location Section
export const locationSection = () => {
  const location = document.createElement("section");
  location.classList.add("section");

  const locationHeading = document.createElement("p");
  locationHeading.textContent = "Location";
  locationHeading.classList.add("name");

  const locationP = document.createElement("p");
  locationP.textContent = `Visit Puchi Restarant in the heart of Nakhipot/Lalitpur near Buddha Mandir and experience "da best wine in the da Town".`;

  location.appendChild(locationHeading);
  location.appendChild(locationP);

  return location;
};
