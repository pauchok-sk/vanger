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
}