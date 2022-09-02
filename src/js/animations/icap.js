import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const icapTimeline = gsap.timeline();

const icapHeroImageAnimation = () => {
  icapTimeline.fromTo(
    ".icap .image_container",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
  );
};

const icapHeroContentAnimation = () => {
  icapTimeline.fromTo(
    ".icap .icap_banner_content_header",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.25"
  );
  icapTimeline.fromTo(
    ".icap .columns .column",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.15"
  );
  icapTimeline.fromTo(
    ".icap .graduation_graphic_text",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.15"
  );
  icapTimeline.fromTo(
    ".icap .graduation_graphic_underline",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.15"
  );
  icapTimeline.fromTo(
    ".icap .icap_banner_content_footer_header_content",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.15"
  );
};

const icapColumnAnimation = () => {
  icapTimeline.fromTo(
    ".icap .learn_more_columns .sub_header",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.25"
  );
  icapTimeline.fromTo(
    ".icap .learn_more_columns .column span",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.15"
  );
  icapTimeline.fromTo(
    ".icap .learn_more_columns .column h4",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.15"
  );
  icapTimeline.fromTo(
    ".icap .learn_more_columns .column article",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.15"
  );
};

const iCapScrollTrigger = () => {
  ScrollTrigger.create({
    trigger: ".icap",
    onEnter: () => {
      icapHeroImageAnimation();
      icapHeroContentAnimation();
      icapColumnAnimation();
    },
  });
};

export default iCapScrollTrigger;
