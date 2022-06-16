import data from "../../dates.json";
import ShelterCard from "./ShelterCard";

export const createCard = (target, modal) => {
  data.data.forEach((el) => {
    let name = target.querySelector("figcaption");
    if (el.name == name.textContent) {
      let card = new ShelterCard(el);

      const template = drawModalCard(card);
      modal.innerHTML = template;
    }
  });
};

export const drawModalCard = (card) => {
  let template = `
    <div class="content">
        <div class="image">
            <img src=${card._img} alt=${card._name}>
        </div>
        <div class="text-content">
            <h3>${card._name}</h3>
            <h4>${card._type} - ${card._breed}</h4>
            <p>${card._description}</p>
            <ul>
                <li><span>Age:</span> ${card._age}</li>
                <li><span>Inoculations:</span> ${card._inoculations}</li>
                <li><span>Diseases: </span>${card._diseases}</li>
                <li><span>Parasites: </span>${card._parasites}</li>
            </ul>
        </div>
        <button class="close">&#10006;</button>
    </div>
    
    
    `;
  return template;
};
