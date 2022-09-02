import "./css/styles.scss";
import banner from "./js/banner";
import carousel from "./js/carousel";
import charts from "./js/charts";
import bannerScrollTrigger from "./js/animations/banner";
import gsapWorkScrollTrigger from "./js/animations/gsap_work";
import hattiesEffectScrollTrigger from "./js/animations/hatties-effect";
import aboutScrollTrigger from "./js/animations/about";
import icapScrollTrigger from "./js/animations/icap";

window.addEventListener(
  "load",
  function () {
    banner();
    bannerScrollTrigger();
    gsapWorkScrollTrigger();
    hattiesEffectScrollTrigger();
    aboutScrollTrigger();
    icapScrollTrigger();
    carousel();
    charts();
  },
  false
);
