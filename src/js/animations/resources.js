import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const resourcesTimeline = gsap.timeline();

const resourceHeaderAnimation = () => {
  resourcesTimeline.fromTo(
    ".resources_header h5",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
  );
  resourcesTimeline.fromTo(
    ".resources_header h1",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.25"
  );
  resourcesTimeline.fromTo(
    ".resources_header article",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.25"
  );
};
const resourcesScrollTrigger = () => {
  ScrollTrigger.create({
    trigger: ".resources",
    start: "-=75",
    onEnter: () => {
      resourceHeaderAnimation();
    },
  });
};

export default resourcesScrollTrigger;
