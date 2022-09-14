import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const hattiesEffectPulsatingButtonAnimation = () => {
  gsap.fromTo(
    ".hatties_effect .pulsating__button__container",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
  );
};

const hattiesEffectContentAnimations = () => {
  const hattiesEffectContentAnimationsTimeline = gsap.timeline();
  hattiesEffectContentAnimationsTimeline.fromTo(
    ".hatties_effect .inner_wrapper h4",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
  );
  hattiesEffectContentAnimationsTimeline.fromTo(
    ".hatties_effect article h2",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.25"
  );
  hattiesEffectContentAnimationsTimeline.fromTo(
    ".hatties_effect .hatties_effect_content",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.25"
  );
  hattiesEffectContentAnimationsTimeline.fromTo(
    ".hatties_effect .table_wrapper",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.25"
  );
};

const hattiesEffectScrollTrigger = () => {
  ScrollTrigger.create({
    trigger: ".hatties_effect",
    once: true,
    onEnter: () => {
      hattiesEffectPulsatingButtonAnimation();
    },
  });
  ScrollTrigger.create({
    trigger: ".hatties_effect .inner_wrapper",
    once: true,
    onEnter: () => {
      hattiesEffectContentAnimations();
    },
  });
};

export default hattiesEffectScrollTrigger;
