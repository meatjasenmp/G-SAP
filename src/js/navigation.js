import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const navigation = () => {
  const homeNav = document.querySelector(".home_nav a");
  homeNav.addEventListener("click", (e) => {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: ".page_wrap" });
  });

  const overviewNav = document.querySelector(".overview_nav a");
  overviewNav.addEventListener("click", (e) => {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: ".hatties_effect" });
  });

  const aboutNav = document.querySelector(".about_nav a");
  aboutNav.addEventListener("click", (e) => {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: ".about" });
  });

  const resultsNav = document.querySelector(".results_nav a");
  resultsNav.addEventListener("click", (e) => {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: ".results" });
  });

  const resourcesNav = document.querySelector(".resources_nav a");
  resourcesNav.addEventListener("click", (e) => {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: ".resources" });
  });

  const ribbonNav = document.querySelector(".ribbon a");
  ribbonNav.addEventListener("click", (e) => {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: "footer" });
  });

  const contactNav = document.querySelector(".contact_nav a");
  contactNav.addEventListener("click", (e) => {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: "footer" });
  });
};

export default navigation;
