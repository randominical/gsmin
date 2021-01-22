let mainSwiper = new Swiper ('.carousel__container', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 1300,
    disableOnInteraction: false
  },
  speed: 1000,
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
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.recommend__btn_n',
    prevEl: '.recommend__btn_p',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    595: {
        slidesPerView: 2,
    },
    880: {
        slidesPerView: 3,
    },
    1165: {
      slidesPerView: 4,
    },
  },
});

let discountSwiper = new Swiper ('.discount__container', {
  direction: 'horizontal',
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.discount__btn_n',
    prevEl: '.discount__btn_p',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    595: {
        slidesPerView: 2,
    },
    880: {
        slidesPerView: 3,
    },
    1165: {
      slidesPerView: 4,
    },
  },
})