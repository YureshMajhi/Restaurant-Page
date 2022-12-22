import wine1 from "../../Images/wines/1. Sula Rasa Shiraz.webp";
import wine2 from "../../Images/wines/2. Crios Torrontes.jpg";
import wine3 from "../../Images/wines/3. Zampa Soiree Brut.jpg";

// About Section
export const menuSection = () => {
  // Creating element on about section
  const menu = document.createElement("section");
  menu.classList.add("section");

  // First Wine Section
  //   Adding content for menu section
  const image1 = new Image();
  image1.src = wine1;
  image1.alt = "wine photo";

  //   Adding wine-info
  const info1a = document.createElement("p");
  info1a.textContent = `Alcohol Content: 13%`;
  const info1b = document.createElement("p");
  info1b.textContent = `Price: 750 ml - NPR 1500`;

  // Adding name for menu section
  const name1 = document.createElement("p");
  name1.textContent = "Sula Rasa Shiraz";
  name1.classList.add("name");

  //   Adding everything to menu section
  menu.appendChild(image1);
  menu.appendChild(name1);
  menu.appendChild(info1a);
  menu.appendChild(info1b);

  // Second Wine Section
  //   Adding content for menu section
  const image2 = new Image();
  image2.src = wine2;
  image2.alt = "wine photo";

  //   Adding wine-info
  const info2a = document.createElement("p");
  info2a.textContent = `Alcohol Content: 13.5%`;
  const info2b = document.createElement("p");
  info2b.textContent = `Price: 750 ml - NPR 1500`;

  // Adding name for menu section
  const name2 = document.createElement("p");
  name2.textContent = "Crios Torrontes";
  name2.classList.add("name");

  //   Adding everything to menu section
  menu.appendChild(image2);
  menu.appendChild(name2);
  menu.appendChild(info2a);
  menu.appendChild(info2b);

  // Third Wine Section
  //   Adding content for menu section
  const image3 = new Image();
  image3.src = wine3;
  image3.alt = "wine photo";

  //   Adding wine-info
  const info3a = document.createElement("p");
  info3a.textContent = `Alcohol Content: 12%`;
  const info3b = document.createElement("p");
  info3b.textContent = `Price: 750 ml - NPR 1200`;

  // Adding name for menu section
  const name3 = document.createElement("p");
  name3.textContent = "Zampa Soiree Brut";
  name3.classList.add("name");

  //   Adding everything to menu section
  menu.appendChild(image3);
  menu.appendChild(name3);
  menu.appendChild(info3a);
  menu.appendChild(info3b);

  return menu;
};
