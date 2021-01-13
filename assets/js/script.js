let mySwiper = new Swiper ('.carousel__container', {
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
})