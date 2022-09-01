import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(GSDevTools);

const bannerImageContainerAnimations = () => {
  const tl = gsap.timeline();
  tl.fromTo(
    ".banner_images",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
  );
  tl.fromTo(
    ".life_circle",
    { opacity: 0, y: 100, rotate: 90 },
    { opacity: 1, y: 0, rotate: 0, duration: 1.5, ease: "power4.out" },
    "-=.99"
  );
  GSDevTools.create({ animation: tl });
};

const bannerScrollTrigger = () => {
  ScrollTrigger.create({
    trigger: ".site_banner",
    onEnter: () => {
      bannerImageContainerAnimations();
    },
  });
};

export default bannerScrollTrigger;
