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
  const headerBurger = header.getElementsByTagName("i")[0];
  const headerNav = header.getElementsByTagName("nav")[0];
  const headerList = header.getElementsByTagName("ul")[0];
  const links = ["about", "driver", "broker", "job", "contact"];

  headerBurger.addEventListener("click", () => {
    if (window.innerWidth <= 800) {
      document.body.style.overflowY = "hidden";
      lenis.stop();
      headerNav.style.right = 0;
      headerList.style.left = 0;
    }
  });

  headerNav.addEventListener("click", (e) => {
    if (
      e.target.nodeName != "UL" &&
      e.target.nodeName != "LI" &&
      window.innerWidth <= 800
    ) {
      document.body.style.overflowY = "auto";
      lenis.start();
      headerNav.style.right = "800px";
      headerList.style.left = "-300px";
    }
  });

  if (headerLinksEl.length > 0) {
    for (let i = 0; i < headerLinksEl.length; i++) {
      headerLinksEl[i].addEventListener("click", (e) => {
        if (window.innerWidth <= 800) {
          document.body.style.overflowY = "auto";
          lenis.start();
          headerNav.style.right = "800px";
          headerList.style.left = "-300px";
        }
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
      duration: 0.75,
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
