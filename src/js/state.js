import data from "../../dates.json";
import ShelterCard from "../js/ShelterCard";

const state = {
  _cards: [],
  _containerSlides: document.querySelector(".swiper-wrapper"),

  pagination: {
    _next: document.querySelector(".next__pagination"),
    _prev: document.querySelector(".prev__pagination"),
    _first: document.querySelector(".first-btn"),
    _last: document.querySelector(".last-btn"),
    _numberPage: document.querySelector(".number"),
    _resultArrayOfCards: [],
    _сountPages: 0,
    _countCardsOnPages: 0,
    _currentCards: [],

    pageNext() {
      if (+this.pagination._numberPage.value < +this.pagination._сountPages) {
        +this.pagination._numberPage.value++;
        this._indifyIsActiveButtons();
      }
    },
    pagePrev() {
      if (+this.pagination._numberPage.value > 1) {
        +this.pagination._numberPage.value--;
        this._indifyIsActiveButtons();
      }
    },
  },

  _indifyIsActiveButtons() {
    if (
      +this.pagination._numberPage.value > 1 &&
      +this.pagination._numberPage.value < +this.pagination._сountPages
    ) {
      this.pagination._prev.classList.remove("btn-not-active");
      this.pagination._prev.classList.add("btn-active");
      this.pagination._prev.disabled = false;

      this.pagination._next.classList.remove("btn-not-active");
      this.pagination._next.classList.add("btn-active");
      this.pagination._next.disabled = false;

      this.pagination._first.classList.remove("btn-not-active");
      this.pagination._first.classList.add("btn-active");
      this.pagination._first.disabled = false;

      this.pagination._last.classList.remove("btn-not-active");
      this.pagination._last.classList.add("btn-active");
      this.pagination._last.disabled = false;
    } else if (+this.pagination._numberPage.value == 1) {
      this.pagination._prev.classList.remove("btn-active");
      this.pagination._prev.classList.add("btn-not-active");
      this.pagination._prev.disabled = true;

      this.pagination._first.classList.remove("btn-active");
      this.pagination._first.classList.add("btn-not-active");
      this.pagination._first.disabled = true;

      this.pagination._next.classList.remove("btn-not-active");
      this.pagination._next.classList.add("btn-active");
      this.pagination._next.disabled = false;

      this.pagination._last.classList.remove("btn-not-active");
      this.pagination._last.classList.add("btn-active");
      this.pagination._last.disabled = false;
    } else if (
      +this.pagination._numberPage.value == +this.pagination._сountPages
    ) {
      this.pagination._next.classList.remove("btn-active");
      this.pagination._next.classList.add("btn-not-active");
      this.pagination._next.disabled = true;

      this.pagination._prev.classList.add("btn-active");
      this.pagination._prev.classList.remove("btn-not-active");
      this.pagination._prev.disabled = false;

      this.pagination._last.classList.remove("btn-active");
      this.pagination._last.classList.add("btn-not-active");
      this.pagination._last.disabled = true;

      this.pagination._first.classList.remove("btn-not-active");
      this.pagination._first.classList.add("btn-active");
      this.pagination._first.disabled = false;
    }
  },

  _renderCard() {
    data.data
      .sort(() => Math.random() - 0.5)
      .forEach((el, i) => {
        let card = new ShelterCard({
          name: el.name,
          img: el.img,
        });
        this._cards.push(card);
      });
  },
};
state._renderCard();

export default state;

//Create cards array for pagination(from JSON)
let createArray = () => {
  let randomList = data.data.sort(() => Math.random() - 0.5);
  if (innerWidth >= 1280) {
    for (let i = 0; i < 6; i++) {
      let randomList = data.data.sort(() => Math.random() - 0.5);
      state.pagination._resultArrayOfCards =
        state.pagination._resultArrayOfCards.concat(randomList);
    }
  } else {
    for (let i = 0; i < 6; i++) {
      state.pagination._resultArrayOfCards =
        state.pagination._resultArrayOfCards.concat(randomList);
    }
  }
  return state.pagination._resultArrayOfCards;
};
createArray();

//Add events
if (state.pagination._next) {
  state.pagination._next.addEventListener("click", () => {
    state.pagination.pageNext.bind(state)();
    identifyCurrenCards();
    drawCardPagination(state);
  });
}

if (state.pagination._prev) {
  state.pagination._prev.addEventListener("click", () => {
    state.pagination.pagePrev.bind(state)();
    identifyCurrenCards();
    drawCardPagination(state);
  });
}

if (state.pagination._first) {
  state.pagination._first.addEventListener("click", () => {
    state.pagination._numberPage.value = 1;
    identifyCurrenCards();
    drawCardPagination(state);
    state._indifyIsActiveButtons();
  });
}

if (state.pagination._last) {
  state.pagination._last.addEventListener("click", () => {
    state.pagination._numberPage.value = state.pagination._сountPages;
    identifyCurrenCards();
    drawCardPagination(state);
    state._indifyIsActiveButtons();
  });
}

//Identify number of cards on the page
let indentifyCountCardsOnPage = () => {
  if (window.innerWidth >= 1280) {
    state.pagination._countCardsOnPages = 8;
    state.pagination._сountPages = Math.ceil(
      state.pagination._resultArrayOfCards.length /
        state.pagination._countCardsOnPages
    );
  } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
    state.pagination._countCardsOnPages = 6;
    state.pagination._сountPages = Math.ceil(
      state.pagination._resultArrayOfCards.length /
        state.pagination._countCardsOnPages
    );
  } else if (window.innerWidth < 768) {
    state.pagination._countCardsOnPages = 3;
    state.pagination._сountPages = Math.ceil(
      state.pagination._resultArrayOfCards.length /
        state.pagination._countCardsOnPages
    );
  }
};
indentifyCountCardsOnPage();

let identifyCurrenCards = () => {
  let start =
    (state.pagination._numberPage.value - 1) *
    state.pagination._countCardsOnPages;
  let end = start + state.pagination._countCardsOnPages;

  return (state.pagination._currentCards =
    state.pagination._resultArrayOfCards.slice(start, end));
};

let initiallyCard = () => {
  state.pagination._currentCards = state.pagination._resultArrayOfCards.slice(
    0,
    state.pagination._countCardsOnPages
  );

  if (state.pagination._numberPage) {
    state._indifyIsActiveButtons();
  }
};
initiallyCard();

let drawCardPagination = (state) => {
  const container = document.querySelector(".cards-block__pets");
  if (container) {
    container.innerHTML = "";
    let cards = state.pagination._currentCards;

    cards.forEach((el, i) => {
      const div = document.createElement("div");
      div.classList.add("card", "animate__animated", "animate__fadeIn");
      let template = `
          <figure>
               <img src= ${el.img} alt="katrine">
               <figcaption>${el.name}</figcaption>
          </figure>
           <button class="btn-white">Learn more</button>
      `;
      div.innerHTML = template;
      container.append(div);
    });
  }
};
drawCardPagination(state);

