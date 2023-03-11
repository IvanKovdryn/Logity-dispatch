new Swiper(".swiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  watchOverflow: true,
  loop: true,
  speed: 800,
  loopAdditionalSlides: 3,
  preloadImages: false,
  parallax: true,
  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
});
