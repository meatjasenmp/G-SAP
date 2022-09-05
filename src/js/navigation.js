import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const navigation = () => {
  const homeNav = document.querySelectorAll(".home_nav a");
  for (let nav of homeNav) {
    nav.addEventListener("click", (e) => {
      e.preventDefault();
      gsap.to(window, { duration: 1, scrollTo: ".page_wrap" });
    });
  }

  const overviewNav = document.querySelectorAll(".overview_nav a");
  for (let nav of overviewNav) {
    nav.addEventListener("click", (e) => {
      e.preventDefault();
      gsap.to(window, { duration: 1, scrollTo: ".hatties_effect" });
    });
  }

  const aboutNav = document.querySelectorAll(".about_nav a");
  for (let nav of aboutNav) {
    nav.addEventListener("click", (e) => {
      e.preventDefault();
      gsap.to(window, { duration: 1, scrollTo: ".about" });
    });
  }

  const resultsNav = document.querySelectorAll(".results_nav a");
  for (let nav of resultsNav) {
    nav.addEventListener("click", (e) => {
      e.preventDefault();
      gsap.to(window, { duration: 1, scrollTo: ".results" });
    });
  }

  const resourcesNav = document.querySelectorAll(".resources_nav a");
  for (let nav of resourcesNav) {
    nav.addEventListener("click", (e) => {
      e.preventDefault();
      gsap.to(window, { duration: 1, scrollTo: ".resources" });
    });
  }

  const ribbonNav = document.querySelectorAll(".ribbon a");
  for (let nav of ribbonNav) {
    nav.addEventListener("click", (e) => {
      e.preventDefault();
      gsap.to(window, { duration: 1, scrollTo: "footer" });
    });
  }

  const contactNav = document.querySelectorAll(".contact_nav a");
  for (let nav of contactNav) {
    nav.addEventListener("click", (e) => {
      e.preventDefault();
      gsap.to(window, { duration: 1, scrollTo: "footer" });
    });
  }
};

export const navigationBadges = () => {
  const bullets = document.querySelectorAll(".bullets div a");
  for (let bullet of bullets) {
    const badgeName = bullet.dataset.badge;
    const currentBadge = document.querySelector(
      `div[data-badge="${badgeName}"]`
    );

    bullet.addEventListener("mouseenter", (e) => {
      currentBadge.classList.add("active");
    });
    bullet.addEventListener("mouseleave", (e) => {
      currentBadge.classList.remove("active");
    });
  }
};

export const mobileMenu = () => {
  const menu = document.querySelector(".mobile_menu_icon");

  menu.addEventListener("click", (e) => {
    menu.classList.toggle("active");
  });
};
