import { gsap } from "gsap";

const animateDrawer = (drawerTimeline, element) => {
  drawerTimeline.to(element, {
    height: 0,
    duration: 0.25,
    ease: "power4.ease",
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
