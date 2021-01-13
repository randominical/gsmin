/*let mySwiper = new Swiper('.carousel', {
    wrapperClass: "carousel__wrapper",
    slideClass: "carousel__item",

    slidesPerView: 1,
    pagination: {
      el: '.carousel__pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.carousel__button-next',
      prevEl: '.carousel__button-prev',
    },
  
  })*/
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })