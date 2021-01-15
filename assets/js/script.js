let mainSwiper = new Swiper ('.carousel__container', {
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.carousel__btn_n',
    prevEl: '.carousel__btn_p',
  },
});

let recommendSwiper = new Swiper ('.recommend__container', {
  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.recommend__btn_n',
    prevEl: '.recommend__btn_p',
  },
});

let discountSwiper = new Swiper ('.discount__container', {
  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.discount__btn_n',
    prevEl: '.discount__btn_p',
  },
})