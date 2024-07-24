import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to('#bg_image', {
  scrollTrigger: {
    trigger: '#gsap_1',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
  },
  y: window.innerHeight * 0.75,
  ease: 'none',
  duration: 1,
})

gsap.to('#gsap_2', {
  scrollTrigger: {
    trigger: '#gsap_2',
    start: 'top center',
    end: 'bottom top',
  },
  opacity: 1,
  y: 16,
  duration: 1
})