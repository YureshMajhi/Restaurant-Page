// About Section
export const contactSection = () => {
  // Creating element on contact section
  const contact = document.createElement("section");

  //    creating first section
  //   Adding content for contact section
  const contactP = document.createElement("p");
  contactP.textContent = `Puchi Restaurant welcomes events, parties and celebrations.
  We are happy to discuss booking the whole facility or part of it for your event.
  Just give us a call to discuss rates, menus, and any special requirements you have.`;
  contact.classList.add("section");

  // Adding name for contact section
  const name1 = document.createElement("p");
  name1.textContent = "Your Event";
  name1.classList.add("name");

  //   Adding everything to contact section
  contact.appendChild(name1);
  contact.appendChild(contactP);

  //    creating second section
  //   Adding content for contact section
  const contactPh = document.createElement("p");
  contactPh.textContent = `To make a reservation by phone, call: `;
  const contactPhn = document.createElement("p");
  contactPhn.textContent = `9843568517`;
  const contactem = document.createElement("p");
  contactem.textContent = `Or to reserve by email:`;
  const contacteml = document.createElement("p");
  contacteml.textContent = `totallyvalidmail@gmail.com`;

  const line = document.createElement("hr");

  contact.classList.add("section");

  // Adding name for contact section
  const name2 = document.createElement("p");
  name2.textContent = "Details";
  name2.classList.add("name");

  //   Adding everything to contact section
  contact.appendChild(name2);
  contact.appendChild(contactPh);
  contact.appendChild(contactPhn);
  contact.appendChild(contactem);
  contact.appendChild(contacteml);

  return contact;
};
