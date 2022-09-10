import { gsap } from "gsap";

const animateDrawer = (drawerTimeline, element) => {
  drawerTimeline.set(element, { autoAlpha: 0 });
  drawerTimeline.to(element, {
    height: 0,
    duration: 0.5,
    ease: "power4.easeOut",
  });
  drawerTimeline.reversed() ? drawerTimeline.play() : drawerTimeline.reverse();
};

const drawers = () => {
  const drawerButton = document.querySelectorAll(".drawer-button");
  drawerButton.forEach((button) => {
    const tl = gsap.timeline({ reversed: true, paused: true });
    button.addEventListener("click", (e) => {
      button.classList.toggle("active");
      const drawerId = e.target.getAttribute("data-drawer");
      const drawer = document.getElementById(drawerId);
      animateDrawer(tl, drawer);
    });
  });
};

export default drawers;
