const swiper = new Swiper("#main-slider .swiper", {
  loop: true,
  pagination: {
    el: "#main-slider .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: "#main-slider .swiper-button-next",
    prevEl: "#main-slider .swiper-button-prev",
  },
});
