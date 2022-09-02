import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const gsapWorkHeaderAnimations = () => {
  const gsapWorkHeaderTimeline = gsap.timeline();
  gsapWorkHeaderTimeline.fromTo(
    ".how_header",
    { opacity: 0, x: 50 },
    { opacity: 1, x: 0, duration: 1.5, ease: "power4.out" }
  );
  gsapWorkHeaderTimeline.fromTo(
    ".down_arrow",
    { opacity: 0, y: -25 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", delay: 0.25 },
    "-=1.5"
  );
};

const gsapWorkColumnAnimations = () => {
  gsap.fromTo(
    ".column_content",
    { opacity: 0, x: 50 },
    { opacity: 1, x: 0, duration: 1.5, ease: "power4.out", stagger: 0.25 }
  );
};

const gsapWorkColumnContentImagesAnimations = () => {
  const gsapWorkColumnContentImagesTimeline = gsap.timeline();
  gsapWorkColumnContentImagesTimeline.fromTo(
    ".column_content_images figure",
    { opacity: 0, x: 50 },
    { opacity: 1, x: 0, duration: 1.5, ease: "power4.out", stagger: 0.25 }
  );
  gsapWorkColumnContentImagesTimeline.fromTo(
    ".column_content_images article",
    { opacity: 0, x: 50 },
    { opacity: 1, x: 0, duration: 1.5, ease: "power4.out", stagger: 0.25 },
    "-=1.25"
  );
};

const gsapImageAnimations = () => {
  const gsapImageTimeline = gsap.timeline();
  gsapImageTimeline.fromTo(
    ".hero_image",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", stagger: 0.25 }
  );
  gsapImageTimeline.fromTo(
    ".hero_images_mobile div",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", stagger: 0.25 },
    "-=1.25"
  );
};

const earnedResultsAnimations = () => {
  const earnedResultsTimeline = gsap.timeline();
  earnedResultsTimeline.fromTo(
    ".column_1 figure",
    { opacity: 0, x: 50 },
    { opacity: 1, x: 0, duration: 1.5, ease: "power4.out" }
  );
  earnedResultsTimeline.fromTo(
    ".column_1 h1",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.25"
  );
  earnedResultsTimeline.fromTo(
    ".column_2 .column_2_item",
    { opacity: 0, y: 25 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", stagger: 0.25 },
    "-=1.95"
  );
  earnedResultsTimeline.fromTo(
    ".column_2 .column_2_text",
    { opacity: 0, x: 25 },
    { opacity: 1, x: 0, duration: 1.5, ease: "power4.out", stagger: 0.25 },
    "-=2"
  );
  earnedResultsTimeline.fromTo(
    ".student_invest_of_time header",
    { opacity: 0, x: 25 },
    { opacity: 1, x: 0, duration: 1.5, ease: "power4.out", stagger: 0.25 },
    "-=1.85"
  );
  earnedResultsTimeline.fromTo(
    ".student_invest_of_time_content",
    { opacity: 0, y: 25 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", stagger: 0.25 },
    "-=1.90"
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
  ScrollTrigger.create({
    trigger: ".earned_results",
    onEnter: () => {
      earnedResultsAnimations();
    },
  });
  ScrollTrigger.create({
    trigger: ".hero_images",
    once: true,
    markers: true,
    start: "top bottom-=100px",
    onEnter: () => {
      gsapImageAnimations();
    },
  });
};

export default gsapWorkScrollTrigger;
