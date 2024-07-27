import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

gsap.set("#bg_image", { y: 0 });
gsap.to("#bg_image", {
  scrollTrigger: {
    trigger: "#gsap_1",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    markers: true
  },
  y: window.innerHeight * 0.5,
  ease: "none",
  duration: 1,
  immediateRender: true,
  overwrite: true
});

gsap.utils.toArray(".img").forEach((img, i) => {
  gsap.set(img, { y: 0 });
  gsap.to(img, {
    scrollTrigger: {
      trigger: `.parallax_${i + 1}`,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      markers: true
    },
    y: -400,
    ease: "none",
    duration: 1,
    immediateRender: true,
    overwrite: true
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
