import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    "-=1.15"
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

const gsapImageAnimations = () => {
  gsapWorkTimeline.fromTo(
    ".hero_image",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", stagger: 0.25 },
    "-=1.75"
  );
  gsapWorkTimeline.fromTo(
    ".hero_images_mobile div",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", stagger: 0.25 },
    "-=1.75"
  );
};

const earnedResultsAnimations = () => {
  gsapWorkTimeline.fromTo(
    ".column_1 figure",
    { opacity: 0, x: 50 },
    { opacity: 1, x: 0, duration: 1.5, ease: "power4.out" },
    "-=1.95"
  );
  gsapWorkTimeline.fromTo(
    ".column_1 h1",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=2"
  );
  gsapWorkTimeline.fromTo(
    ".column_2 .column_2_item",
    { opacity: 0, y: 25 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", stagger: 0.25 },
    "-=1.95"
  );
  gsapWorkTimeline.fromTo(
    ".column_2 .column_2_text",
    { opacity: 0, x: 25 },
    { opacity: 1, x: 0, duration: 1.5, ease: "power4.out", stagger: 0.25 },
    "-=1.45"
  );
  gsapWorkTimeline.fromTo(
    ".student_invest_of_time header",
    { opacity: 0, x: 25 },
    { opacity: 1, x: 0, duration: 1.5, ease: "power4.out", stagger: 0.25 },
    "-=1.25"
  );
  gsapWorkTimeline.fromTo(
    ".student_invest_of_time_content",
    { opacity: 0, y: 25 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", stagger: 0.25 },
    "-=1.20"
  );
};

const gsapWorkScrollTrigger = () => {
  ScrollTrigger.create({
    trigger: ".how",
    onEnter: () => {
      gsapWorkHeaderAnimations();
      gsapWorkColumnAnimations();
      gsapWorkColumnContentImagesAnimations();
      gsapImageAnimations();
      earnedResultsAnimations();
    },
  });
};

export default gsapWorkScrollTrigger;
