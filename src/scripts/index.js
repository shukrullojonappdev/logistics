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
  const headerBurger = header.getElementsByTagName("i")[0];
  const headerNav = header.getElementsByTagName("nav")[0];
  const headerList = header.getElementsByTagName("ul")[0];

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

  // if (headerLinksEl.length > 0) {
  //   for (let i = 0; i < headerLinksEl.length; i++) {
  //     headerLinksEl[i].addEventListener("click", (e) => {
  //       if (window.innerWidth <= 800) {
  //         document.body.style.overflowY = "auto";
  //         lenis.start();
  //         headerNav.style.right = "800px";
  //         headerList.style.left = "-300px";
  //       }
  // lenis.scrollTo(`#${links[i]}`, {
  //   duration: i + 1,
  //   easing: (x) => {
  //     return 1 - (1 - x) * (1 - x);
  //   },
  // });
  //     });
  //   }
  // }

  // const footer = document.getElementsByTagName("footer")[0];
  // const footerLinksEl = footer.getElementsByTagName("li");

  // if (footerLinksEl.length > 0) {
  //   for (let i = 0; i < footerLinksEl.length; i++) {
  //     footerLinksEl[i].addEventListener("click", (e) => {
  //       lenis.scrollTo(`#${links[i]}`, {
  //         duration: footerLinksEl.length - i - 1,
  //         easing: (x) => {
  //           return 1 - (1 - x) * (1 - x);
  //         },
  //       });
  //     });
  //   }
  // }

  gsap.utils.toArray(".stat").forEach((stat, i) => {
    gsap.to(stat, {
      scrollTrigger: {
        trigger: `#stat${i + 1}`,
        trigger: `#stat${i + 1}`,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => {
          switch (i) {
            case 0:
              animateValue("stat1", 0, 10, 1500);
              break;
            case 1:
              animateValue("stat2", 0, 24, 1500);
              break;
            case 2:
              animateValue("stat3", 0, 150, 1500);
              break;
            case 3:
              animateValue("stat4", 0, 300, 1500);
              break;
            default:
              return;
          }
        },
      },
    });
  });

  gsap.utils.toArray(".text-animation").forEach((text, i) => {
    gsap.to(text, {
      scrollTrigger: {
        trigger: `.text-animation_trigger_${i + 1}`,
        start: `top bottom`,
        end: "bottom top",
        // markers: true,
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

function animateValue(id, start, end, duration) {
  if (start === end) return;
  var range = end - start;
  var current = start;
  var increment = end > start ? 1 : -1;
  var increment = end > start ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.getElementById(id);

  var timer = setInterval(function () {
    current += increment;
    obj.innerHTML = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}
