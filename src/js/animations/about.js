import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutAboutTextAnimations = () => {
  const aboutTextAnimationsTimeline = gsap.timeline();
  aboutTextAnimationsTimeline.fromTo(
    ".portrait_image_title_mobile h5, .biography_wrapper h5, .portrait_image_container .biography_image_name",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
  );
  aboutTextAnimationsTimeline.fromTo(
    ".portrait_image_title_mobile .biography_image_name, .biography_wrapper h2, .portrait_image_container .biography_image_title",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.25"
  );
  aboutTextAnimationsTimeline.fromTo(
    ".portrait_image_title_mobile .biography_image_title, .biography_wrapper .biography_wrapper_content",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.35"
  );
};

const aboutImageContainerAnimations = () => {
  const aboutImageContainerTimeline = gsap.timeline();
  aboutImageContainerTimeline.fromTo(
    ".about .portrait_image",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
  );
  aboutImageContainerTimeline.fromTo(
    ".about .life_circle",
    { opacity: 0, y: 100, rotate: 90 },
    { opacity: 1, y: 0, rotate: 0, duration: 1.5, ease: "power4.out" },
    "-=1.25"
  );
};

const missionStatementAnimations = () => {
  const missionStatementTimeline = gsap.timeline();
  missionStatementTimeline.fromTo(
    ".mission_statement h5",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
  );
  missionStatementTimeline.fromTo(
    ".mission_statement p",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.25"
  );
};

const quoteImageAnimation = () => {
  gsap.fromTo(
    ".quote_image",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
  );
};

const aboutScrollTrigger = () => {
  ScrollTrigger.create({
    trigger: ".about",
    onEnter: () => {
      aboutAboutTextAnimations();
    },
  });
  ScrollTrigger.create({
    trigger: ".about .portrait_image",
    onEnter: () => {
      aboutImageContainerAnimations();
    },
  });
  ScrollTrigger.create({
    trigger: ".about .mission_statement",
    onEnter: () => {
      missionStatementAnimations();
    },
  });
  ScrollTrigger.create({
    trigger: ".about .quote_image",
    onEnter: () => {
      quoteImageAnimation();
    },
  });
};

export default aboutScrollTrigger;
