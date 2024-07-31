import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);
window.addEventListener("load", () => {
  gsap.utils.toArray(".img").forEach((img, i) => {
    gsap.to(img, {
      scrollTrigger: {
        trigger: `.parallax_${i + 1}`,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      top: -400,
      duration: 1,
    });
  });

  const swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 15,
    modules: [Navigation, Pagination],
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
})
