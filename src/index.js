import "./../node_modules/normalize.css/normalize.css";

import "../node_modules/swiper/swiper-bundle.css";
import "../node_modules/animate.css/animate.css";

import "./style/petsStyle.scss";
import "./style/style.scss";
import "./style/header.scss";
import "./style/not_only.scss";
import "./style/modal.scss";
import "./style/about.scss";
import "./style/our-friends.scss";
import "./style/help.scss";
import "./style/donation.scss";
import "./style/footer.scss";
import "./style/modal_card.scss";

import WOW from "../node_modules/wow.js/dist/wow";

import { drawSliderCards } from "./js/drawSliderCards";
import { identifyWidthScreen } from "./js/identifyWidthScreen";
import { createCard, drawModalCard } from "./js/createCard";

import state from "./js/state";

import data from "../dates.json";
// require("babel-core/register");
// require("babel-polyfill");

new WOW().init();

const burger = document.querySelector(".burger-menu");
const cardOnTouch = document.querySelector(".modal-touch");

//Open/Close header-popup
burger.addEventListener("click", (e) => {
  const modal = document.querySelector(".container-popup");

  burger.classList.add("active-burger");
  modal.classList.toggle("container-popup-show");

  modal.addEventListener("click", (e) => {
    modal.classList.remove("container-popup-show");
    burger.classList.remove("active-burger");
  });
});

drawSliderCards(state);

// Identify the screen`s width
identifyWidthScreen();
drawSliderCards(state);

window.addEventListener(
  `resize`,
  (event) => {
    identifyWidthScreen();
  },
  false
);

// AddEventListener on cards and opening the modal window
cardOnTouch.addEventListener("click", (e) => {
  const modal = document.querySelector(".container-modal__card");
  const cardTarget = e.target.closest("div");

  createCard(cardTarget, modal);
  modal.classList.add("active");
  const close = document.querySelector(".close");

  close.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("container-modal__card")) {
      modal.classList.remove("active");
    }
  });
});
