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
    nextEl: '.carousel__arrow_n',
    prevEl: '.carousel__arrow_p',
  },
});

let recommendSwiper = new Swiper ('.recommend__container', {
  direction: 'horizontal',
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.recommend__arrow_n',
    prevEl: '.recommend__arrow_p',
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
    nextEl: '.discount__arrow_n',
    prevEl: '.discount__arrow_p',
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

let screenWidth = window.outerWidth;

let newSlider = undefined;
function initNewSwiper() {
  if ( (screenWidth < (768)) && (newSlider == undefined)) {
    newSlider = new Swiper('.new__container', {
      direction: 'horizontal',
      loop: true,
      navigation: {
        nextEl: '.new__arrow_n',
        prevEl: '.new__arrow_p',
      },
      slidesPerView: 1,
    });
  } else if ((screenWidth > 767) && (newSlider != undefined)) {
    newSlider.destroy();
    newSlider = undefined;
  }
}
initNewSwiper();

window.addEventListener('resize', function(event){
  initNewSwiper();
});

let hitsSlider = undefined;
function initHitsSwiper() {
  if ( (screenWidth < (768)) && (hitsSlider == undefined)) {
    hitsSlider = new Swiper('.hits__container', {
      direction: 'horizontal',
      loop: true,
      navigation: {
        nextEl: '.hits__arrow_n',
        prevEl: '.hits__arrow_p',
      },
      slidesPerView: 1,
    });
  } else if ((screenWidth > 767) && (hitsSlider != undefined)) {
    hitsSlider.destroy();
    hitsSlider = undefined;
  }
}
initHitsSwiper();

window.addEventListener('resize', function(event){
  initHitsSwiper();
});