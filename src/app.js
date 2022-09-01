import "./css/styles.scss";
import banner from "./js/banner";
import carousel from "./js/carousel";
import charts from "./js/charts";
import bannerScrollTrigger from "./js/animations/banner";

window.addEventListener(
  "load",
  function () {
    banner();
    bannerScrollTrigger();
    carousel();
    charts();
  },
  false
);
