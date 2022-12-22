import { homePage } from "./Tabs Modules/homePage.js";
import { menuSection } from "./Tabs Modules/menuPage/beverages.js";
import { contactSection } from "./Tabs Modules/contactPage/contactPage.js";

const content = (() => {
  let div = document.querySelector("#content");
  return { div };
})();

export default class Restaurant {
  homePage() {
    content.div.innerHTML = "";

    // Adding container
    const container = document.createElement("div");
    container.classList.add("container");

    // Creating Header
    const header = document.createElement("h1");
    header.textContent = "Puchi Restaurant";
    header.classList.add("home-header");

    // adding all elements to the content.div
    content.div.appendChild(container);

    container.appendChild(header);
    container.appendChild(homePage.aboutSection());
    container.appendChild(homePage.hoursSection());
    container.appendChild(homePage.locationSection());
  }

  menuPage() {
    content.div.innerHTML = "";

    // Adding container
    const container = document.createElement("div");
    container.classList.add("container");

    // Creating Header
    const header = document.createElement("h1");
    header.textContent = "Beverages";
    header.classList.add("home-header");

    // adding all elements to the content.div
    content.div.appendChild(container);
    container.appendChild(header);

    container.appendChild(menuSection());
  }

  contactPage() {
    content.div.innerHTML = "";

    // Adding container
    const container = document.createElement("div");
    container.classList.add("container");

    // Creating Header
    const header = document.createElement("h1");
    header.textContent = "Contact us";
    header.classList.add("home-header");

    // adding all elements to the content.div
    content.div.appendChild(container);
    container.appendChild(header);

    container.appendChild(contactSection());
  }
}
