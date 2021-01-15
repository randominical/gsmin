let mainSwiper = new Swiper ('.carousel__container', {
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let recommendSwiper = new Swiper ('.recommend__container', {
  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 30,
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})