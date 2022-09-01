import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const hattiesEffectTimeline = gsap.timeline();

const hattiesEffectPulsatingButtonAnimation = () => {
  hattiesEffectTimeline.fromTo(
    ".hatties_effect .pulsating__button__container",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
  );
};

const hattiesEffectContentAnimations = () => {
  hattiesEffectTimeline.fromTo(
    ".hatties_effect .inner_wrapper h4",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.25"
  );
  hattiesEffectTimeline.fromTo(
    ".hatties_effect article h1",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.15"
  );
  hattiesEffectTimeline.fromTo(
    ".hatties_effect .hatties_effect_content",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.15"
  );
  hattiesEffectTimeline.fromTo(
    ".hatties_effect .table_wrapper",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.10"
  );
};

const hattiesEffectScrollTrigger = () => {
  ScrollTrigger.create({
    trigger: ".hatties_effect",
    onEnter: () => {
      hattiesEffectPulsatingButtonAnimation();
      hattiesEffectContentAnimations();
    },
  });
};

export default hattiesEffectScrollTrigger;
