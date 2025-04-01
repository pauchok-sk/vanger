export default function sliders() {
  const cooperationSlider = document.querySelector(".cooperation__slider");

  if (cooperationSlider) {
    const initialSlide = cooperationSlider.querySelectorAll(".swiper-slide").length / 2;

    const slider = new Swiper(cooperationSlider, {
      speed: 800,
      slidesPerView: "auto",
      spaceBetween: 20,
      centeredSlides: true,
      initialSlide: initialSlide,
      autoplay: {
        delay: 2500
      },
      breakpoints: {
        768: {
          slidesPerView: "auto",
          spaceBetween: 40,
        }
      }
    })
  }
  const singleSlider = document.querySelector(".single__slider");

  if (singleSlider) {
    const slider = new Swiper(singleSlider, {
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 3500
      },
      navigation: {
        prevEl: ".single .slider-btn._prev",
        nextEl: ".single .slider-btn._next"
      },
      pagination: {
        el: ".single .slider-pagination",
        clickable: true
      }
    })
  }
}