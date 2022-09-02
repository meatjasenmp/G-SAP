import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(GSDevTools);
const aboutTimeline = gsap.timeline();

const aboutAboutTextAnimations = () => {
  aboutTimeline.fromTo(
    ".portrait_image_title_mobile h5, .biography_wrapper h5, .portrait_image_container .biography_image_name",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
  );
  aboutTimeline.fromTo(
    ".portrait_image_title_mobile .biography_image_name, .biography_wrapper h2, .portrait_image_container .biography_image_title",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.25"
  );
  aboutTimeline.fromTo(
    ".portrait_image_title_mobile .biography_image_title, .biography_wrapper .biography_wrapper_content",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.35"
  );
};

const aboutImageContainerAnimations = () => {
  aboutTimeline.fromTo(
    ".about .portrait_image",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.45"
  );
  aboutTimeline.fromTo(
    ".about .life_circle",
    { opacity: 0, y: 100, rotate: 90 },
    { opacity: 1, y: 0, rotate: 0, duration: 1.5, ease: "power4.out" },
    "-=1.50"
  );
};

const missionStatementAnimations = () => {
  aboutTimeline.fromTo(
    ".mission_statement h5",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.25"
  );
  aboutTimeline.fromTo(
    ".mission_statement p",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.25"
  );
};

const quoteImageAnimation = () => {
  aboutTimeline.fromTo(
    ".quote_image",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.35"
  );
};

const aboutScrollTrigger = () => {
  ScrollTrigger.create({
    trigger: ".about",
    onEnter: () => {
      aboutAboutTextAnimations();
      aboutImageContainerAnimations();
      missionStatementAnimations();
      quoteImageAnimation();
    },
  });
};

// GSDevTools.create({ animation: aboutTimeline });

export default aboutScrollTrigger;
