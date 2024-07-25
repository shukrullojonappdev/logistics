import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to("#bg_image", {
  scrollTrigger: {
    trigger: "#gsap_1",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
  y: -window.innerHeight * 0.5,
  ease: "none",
  duration: 1,
});
