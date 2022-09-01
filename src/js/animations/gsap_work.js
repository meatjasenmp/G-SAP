import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(GSDevTools);
const gsapWorkTimeline = gsap.timeline();

const gsapWorkHeaderAnimations = () => {
  gsapWorkTimeline.fromTo(
    ".how_header",
    { opacity: 0, x: 50 },
    { opacity: 1, x: 0, duration: 1.5, ease: "power4.out" }
  );
  gsapWorkTimeline.fromTo(
    ".down_arrow",
    { opacity: 0, y: -25 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", delay: 0.25 },
    "-=1.5"
  );
};

const gsapWorkColumnAnimations = () => {
  gsapWorkTimeline.fromTo(
    ".column_content",
    { opacity: 0, x: 50 },
    { opacity: 1, x: 0, duration: 1.5, ease: "power4.out", stagger: 0.25 },
    "-=.90"
  );
};

const gsapWorkColumnContentImagesAnimations = () => {
  gsapWorkTimeline.fromTo(
    ".column_content_images figure",
    { opacity: 0, x: 50 },
    { opacity: 1, x: 0, duration: 1.5, ease: "power4.out", stagger: 0.25 },
    "-=1.25"
  );
  gsapWorkTimeline.fromTo(
    ".column_content_images article",
    { opacity: 0, x: 50 },
    { opacity: 1, x: 0, duration: 1.5, ease: "power4.out", stagger: 0.25 },
    "-=1.65"
  );
};

const gsapWorkScrollTrigger = () => {
  ScrollTrigger.create({
    trigger: ".how",
    onEnter: () => {
      gsapWorkHeaderAnimations();
      gsapWorkColumnAnimations();
      gsapWorkColumnContentImagesAnimations();
    },
  });
};

GSDevTools.create({ animation: gsapWorkTimeline });

export default gsapWorkScrollTrigger;
