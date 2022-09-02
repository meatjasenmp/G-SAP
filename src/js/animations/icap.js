import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const icapTimeline = gsap.timeline();

const icapHeroImageAnimation = () => {
  gsap.fromTo(
    ".icap .image_container",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
  );
};

const icapHeroContentAnimation = () => {
  const icapHeroContentAnimationTimeline = gsap.timeline();
  icapHeroContentAnimationTimeline.fromTo(
    ".icap .icap_banner_content_header",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
  );
  icapHeroContentAnimationTimeline.fromTo(
    ".icap .columns .column",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.25"
  );
};

const icapGraduationAnimation = () => {
  const icapGraduationTimeline = gsap.timeline();
  icapGraduationTimeline.fromTo(
    ".icap .graduation_graphic_text",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
  );
  icapGraduationTimeline.fromTo(
    ".icap .graduation_graphic_underline",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.25"
  );
  icapGraduationTimeline.fromTo(
    ".icap .icap_banner_content_footer_header_content",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.25"
  );
};

const icapColumnAnimation = () => {
  const icapColumnAnimationTimeline = gsap.timeline();
  icapColumnAnimationTimeline.fromTo(
    ".icap .learn_more_columns .sub_header",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
  );
  icapColumnAnimationTimeline.fromTo(
    ".icap .learn_more_columns .column span",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.25"
  );
  icapColumnAnimationTimeline.fromTo(
    ".icap .learn_more_columns .column h4",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.25"
  );
  icapColumnAnimationTimeline.fromTo(
    ".icap .learn_more_columns .column article",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.25"
  );
};

const iCapScrollTrigger = () => {
  ScrollTrigger.create({
    trigger: ".icap",
    onEnter: () => {
      icapHeroImageAnimation();
    },
  });
  ScrollTrigger.create({
    trigger: ".icap .icap_columns",
    onEnter: () => {
      icapHeroContentAnimation();
    },
  });
  ScrollTrigger.create({
    trigger: ".icap .graduation",
    onEnter: () => {
      icapGraduationAnimation();
    },
  });
  ScrollTrigger.create({
    trigger: ".icap .learn_more_columns",
    onEnter: () => {
      icapColumnAnimation();
    },
  });
};

export default iCapScrollTrigger;
