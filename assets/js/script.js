let mySwiper = new Swiper('.carousel', {
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
  
  })