import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Swiper from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination } from "swiper/modules";
import Lenis from "lenis";

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);
lenis.on("scroll", ScrollTrigger.update);

const nav = document.getElementsByTagName("nav")[0];
const linksEl = nav.getElementsByTagName("li");
const links = ["about", "driver", "broker", "contact"];

if (linksEl.length > 0) {
  for (let i = 0; i < linksEl.length; i++) {
    linksEl[i].addEventListener("click", (e) => {
      lenis.scrollTo(`#${links[i]}`, { duration: (i + 1) * 2 });
    });
  }
}

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
      overwrite: true,
    });
  });

  // gsap.utils.toArray('.stat').forEach((stat, i) => {
  //   gsap.to(stat, {
  //     scrollTrigger: {
  //       trigger: `#stat${i + 1}`,
  //       start: 'top bottom',
  //       end: 'bottom top',
  //       onEnter: () => {
  //         switch (i) {
  //           case 0: animateValue('stat1', 0, 10, 1500); break;
  //           case 1: animateValue('stat2', 0, 24, 1500); break;
  //           case 2: animateValue('stat3', 0, 150, 1500); break;
  //           case 3: animateValue('stat4', 0, 300, 1500); break;
  //           default: return
  //         }
  //       },
  //     }
  //   })
  // })

  gsap.utils.toArray(".text-animation").forEach((text, i) => {
    gsap.to(text, {
      scrollTrigger: {
        trigger: `.text-animation_trigger_${i + 1}`,
        start: `center bottom`,
        end: "bottom top",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power4.in",
      overwrite: true,
    });
  });

  // const swiper = new Swiper(".mySwiper", {
  //   slidesPerView: "auto",
  //   spaceBetween: 15,
  //   modules: [Navigation, Pagination],
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });
});

// function animateValue(id, start, end, duration) {
//   if (start === end) return;
//   var range = end - start;
//   var current = start;
//   var increment = end > start ? 1 : -1;
//   var stepTime = Math.abs(Math.floor(duration / range));
//   var obj = document.getElementById(id);
//   var timer = setInterval(function () {
//     current += increment;
//     obj.innerHTML = current;
//     if (current == end) {
//       clearInterval(timer);
//     }
//   }, stepTime);
// }
