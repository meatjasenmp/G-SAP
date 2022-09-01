import "./css/styles.scss";
import banner from "./js/banner";
import carousel from "./js/carousel";
import charts from "./js/charts";
import bannerScrollTrigger from "./js/animations/banner";
import gsapWorkScrollTrigger from "./js/animations/gsap_work";

window.addEventListener(
  "load",
  function () {
    banner();
    bannerScrollTrigger();
    gsapWorkScrollTrigger();
    carousel();
    charts();
  },
  false
);
