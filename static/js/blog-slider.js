new Swiper(".blog-row-wrapper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  simulateTouch: false,
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  watchOverflow: true,
  loop: true,
  speed: 800,
  loopAdditionalSlides: 3,
  preloadImages: false,
  parallax: true,
  spaceBetween: 10,
  autoplay: false,
});
