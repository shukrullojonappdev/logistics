import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Lenis from "lenis";

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);
lenis.on("scroll", ScrollTrigger.update);

window.addEventListener("load", () => {
  const header = document.getElementsByTagName("header")[0];
  const headerLinksEl = header.getElementsByTagName("li");
  const links = ["about", "driver", "broker", "job", "contact"];

  if (headerLinksEl.length > 0) {
    for (let i = 0; i < headerLinksEl.length; i++) {
      headerLinksEl[i].addEventListener("click", (e) => {
        lenis.scrollTo(`#${links[i]}`, {
          duration: i + 1,
          easing: (x) => {
            return 1 - (1 - x) * (1 - x);
          },
        });
      });
    }
  }

  const footer = document.getElementsByTagName("footer")[0];
  const footerLinksEl = footer.getElementsByTagName("li");

  if (footerLinksEl.length > 0) {
    for (let i = 0; i < footerLinksEl.length; i++) {
      footerLinksEl[i].addEventListener("click", (e) => {
        lenis.scrollTo(`#${links[i]}`, {
          duration: footerLinksEl.length - i - 1,
          easing: (x) => {
            return 1 - (1 - x) * (1 - x);
          },
        });
      });
    }
  }

  gsap.utils.toArray(".text-animation").forEach((text, i) => {
    gsap.to(text, {
      scrollTrigger: {
        trigger: `.text-animation_trigger_${i + 1}`,
        start: `top bottom`,
        end: "bottom top",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power4.in",
      overwrite: true,
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
});
