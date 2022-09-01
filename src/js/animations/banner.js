import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const bannerTimeline = gsap.timeline();

const bannerImageContainerAnimations = () => {
  bannerTimeline.fromTo(
    ".banner_images",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
  );
  bannerTimeline.fromTo(
    ".banner_image_container .life_circle",
    { opacity: 0, y: 100, rotate: 90 },
    { opacity: 1, y: 0, rotate: 0, duration: 1.5, ease: "power4.out" },
    "-=1.20"
  );
};

const bannerImageTextAnimations = () => {
  bannerTimeline.fromTo(
    ".banner_header",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=2.15"
  );
  bannerTimeline.fromTo(
    ".banner_content",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", delay: 0.25 },
    "-=2.20"
  );
};

const bannerImageBulletAnimations = () => {
  bannerTimeline.fromTo(
    ".banner_content_bullets li",
    { opacity: 0, y: 25 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", stagger: 0.2 },
    "-=1.5"
  );
};

const bannerScrollTrigger = () => {
  ScrollTrigger.create({
    trigger: ".site_banner",
    onEnter: () => {
      bannerImageContainerAnimations();
      bannerImageTextAnimations();
    },
  });
  ScrollTrigger.create({
    trigger: ".banner_content_bullets",
    onEnter: () => {
      bannerImageBulletAnimations();
    },
  });
};

export default bannerScrollTrigger;
