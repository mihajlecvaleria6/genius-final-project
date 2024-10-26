const swipers = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    500: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: '.carousel-buttons.next',
  },
});
