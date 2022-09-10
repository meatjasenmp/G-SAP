import { gsap } from "gsap";

const tl = gsap.timeline({ reversed: true, paused: true });

const animateDrawer = (element) => {
  tl.set(element, { autoAlpha: 0 });
  tl.to(element, { height: 0, duration: 0.5, ease: "power4.easeOut" });
  tl.reversed() ? tl.play() : tl.reverse();
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
