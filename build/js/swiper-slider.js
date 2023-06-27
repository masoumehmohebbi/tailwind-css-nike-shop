let swiper1 = new Swiper('.swiper1', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // new shoes parts
  let swiper2 = new Swiper('.swiper2', {
    slidesPerView: window.innerWidth > 890 ?
                                  (4)
                                  :window.innerWidth > 689  ? 
                                  (3)
                                  :window.innerWidth > 410  ? 
                                  (2)
                                  :(1.3),
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    
  });

  // sending part swiper
  const settingSwiper=()=>{
      if (window.innerWidth >=640) {
        document.querySelector('.sending-swiper-wrapper').classList.remove('swiper-wrapper')
        
    }else{
      document.querySelector('.sending-swiper-wrapper').classList.add('swiper-wrapper')

      let swiper3 = new Swiper('.swiper3', {
        slidesPerView: 'auto',
        initialSlide: 1,
        effect: 'fade',
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  }
  window.addEventListener('load',settingSwiper)
  window.addEventListener('resize',settingSwiper)

  // weblog
  let swiper4 = new Swiper('.swiper4', {
    slidesPerView: window.innerWidth > 410 ? 2 : 1.2,
    spaceBetween: 20,
    loop: true,
    effect: 'slide',
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    },
    
  });

