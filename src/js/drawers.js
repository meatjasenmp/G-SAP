import { gsap } from "gsap";

const animateDrawer = (element) => {
  const tl = gsap
    .timeline({ reversed: true, paused: true })
    .to(element, { height: 0, autoAlpha: 0, duration: 0.5 }, "start+=0.001");

  return tl.reversed() ? tl.play() : tl.reverse();
};

const drawers = () => {
  const drawerButton = document.querySelectorAll(".drawer-button");

  drawerButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      const drawerId = e.target.getAttribute("data-drawer");
      const drawer = document.getElementById(drawerId);
      animateDrawer(drawer);
    });
  });
};

export default drawers;
