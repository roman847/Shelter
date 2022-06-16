export const drawSliderCards = (state) => {
  let cards = state._cards;

  state._cards.forEach((el, i) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.classList.add("swiper-slide");
    let template = `
              <figure>
                   <img src= ${el._img} alt"${el.name}>
                   <figcaption>${el._name}</figcaption>
              </figure>
               <button class="btn-white">Learn more</button>
          `;
    div.innerHTML = template;
    if (state._containerSlides) {
      state._containerSlides.append(div);
    }
  });
};
