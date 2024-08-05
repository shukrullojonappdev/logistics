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
      overwrite: true
    });
  });

  gsap.utils.toArray('.stat').forEach((stat, i) => {
    gsap.to(stat, {
      scrollTrigger: {
        trigger: `#stat${i+1}`,
        start: 'top bottom',
        end: 'bottom top',
        onEnter: () => {
          switch (i) {
            case 0: animateValue('stat1', 0, 10, 1500); break;
            case 1: animateValue('stat2', 0, 24, 1500); break;
            case 2: animateValue('stat3', 0, 150, 1500); break;
            case 3: animateValue('stat4', 0, 300, 1500); break;
            default: return
          }
        },
      }
    })
  })

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

function animateValue(id, start, end, duration) {
  if (start === end) return;
  var range = end - start;
  var current = start;
  var increment = end > start? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.getElementById(id);
  var timer = setInterval(function() {
      current += increment;
      obj.innerHTML = current;
      if (current == end) {
          clearInterval(timer);
      }
  }, stepTime);
}