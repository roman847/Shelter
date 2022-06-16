import data from "../../dates.json";

class ShelterCard {
  constructor(data) {
    this._name = data.name;
    this._img = data.img;
    this._type = data.type;
    this._breed = data.breed;
    this._description = data.description;
    this._age = data.age;
    this._inoculations = data.inoculations;
    this._diseases = data.diseases;
    this._parasites = data.parasites;
  }

  drawCard(name, img) {
    const container = document.querySelector(".swiper-wrapper");

    data.data.forEach((el, i) => {
      const div = document.createElement("div");
      div.classList.add("card");
      div.classList.add("swiper-slide");

      let template = `
        <figure>
             <img src= ${el.img} alt="katrine">
             <figcaption>${el.name}</figcaption>
        </figure>
         <button class="btn-white">Learn more</button>
    `;
      div.innerHTML = template;
      container.append(template);
    });
  }
}

export default ShelterCard;
