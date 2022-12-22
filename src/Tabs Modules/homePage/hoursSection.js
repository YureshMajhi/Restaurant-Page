// Hours Section
export const hoursSection = () => {
  const hours = document.createElement("section");
  const hoursHeading = document.createElement("p");
  hoursHeading.textContent = "Hours";
  hoursHeading.classList.add("name");

  const hoursContent = document.createElement("div");
  hoursContent.innerHTML = `
        <ul>
          <li>Sun: 8am - 7pm</li>
          <li>Mon: 8am - 7pm</li>
          <li>Tue: 8am - 7pm</li>
          <li>Wed: 8am - 7pm</li>
          <li>Thu: 8am - 7pm</li>
          <li>Fri: 8am - 7pm</li>
          <li>Sat: Holiday</li>
        </ul>
      `;

  hours.appendChild(hoursHeading);
  hours.appendChild(hoursContent);

  return hours;
};
