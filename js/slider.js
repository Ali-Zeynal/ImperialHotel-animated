const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  effect: "fade",
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
