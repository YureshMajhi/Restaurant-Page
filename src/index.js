// Importing css
import style from "./main.css";

// Importing Javascript files
import Restaurant from "./compoenent.js";

// Rendering home page while startup
let restaurant = new Restaurant();
restaurant.homePage();

// setting event listeners
document
  .querySelector("#home-btn")
  .addEventListener("click", restaurant.homePage);
document
  .querySelector("#menu-btn")
  .addEventListener("click", restaurant.menuPage);
document
  .querySelector("#contact-btn")
  .addEventListener("click", restaurant.contactPage);
