new Swiper('.swiper', {
  slidesPerView: 3,
  sliidePerGroup: 1,
  spaceBetween: 30,
  loop: true,
  speed: 500,
    
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }

});


