import Swiper from "swiper/bundle";
// import "../node_modules/swiper/swiper-bundle.css";

export const identifyWidthScreen = () => {
  if (window.screen.width >= 1280) {
    const swiper = new Swiper(".swiper", {
      spaceBetween: 90,
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },

      loop: true,
      loopedSlides: 8,
      slidesPerView: 3,
      slidesPerGroup: 3,
    });
    return swiper;
  } else if (window.screen.width < 1280 && window.screen.width >= 768) {
    const swiper = new Swiper(".swiper", {
      spaceBetween: 40,
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },

      loop: true,
      loopedSlides: 8,
      slidesPerView: 2,
      slidesPerGroup: 2,
    });
    return swiper;
  } else if (window.screen.width < 768) {
    const swiper = new Swiper(".swiper", {
      spaceBetween: 90,
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      loop: true,
      loopedSlides: 8,
    });
    return swiper;
  }
};
