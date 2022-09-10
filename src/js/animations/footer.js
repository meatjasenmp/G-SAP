import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const footerTimeline = gsap.timeline();

const footerContentAnimation = () => {
  footerTimeline.fromTo(
    ".footer_wrapper h1",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
  );
  footerTimeline.fromTo(
    ".footer_wrapper article",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.35"
  );
  footerTimeline.fromTo(
    ".gsap_logo_combined .image",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.35"
  );
  footerTimeline.fromTo(
    ".footer_wrapper .life_circle",
    { opacity: 0, y: 100, rotate: 90 },
    { opacity: 1, y: 0, rotate: 0, duration: 1.5, ease: "power4.out" },
    "-=1.25"
  );
  footerTimeline.fromTo(
    ".footer_wrapper .site_tagline",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.20"
  );
};

const footerScrollTrigger = () => {
  ScrollTrigger.create({
    trigger: ".footer_wrapper",
    once: true,
    onEnter: () => {
      footerContentAnimation();
    },
  });
};

export default footerScrollTrigger;
