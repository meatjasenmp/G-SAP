import "./css/styles.scss";
import banner from "./js/banner";
import carousel from "./js/carousel";
import resultsScrollTrigger from "./js/animations/results";
import bannerScrollTrigger from "./js/animations/banner";
import gsapWorkScrollTrigger from "./js/animations/gsap_work";
import hattiesEffectScrollTrigger from "./js/animations/hatties-effect";
import aboutScrollTrigger from "./js/animations/about";
import icapScrollTrigger from "./js/animations/icap";
import resourcesScrollTrigger from "./js/animations/resources";
import footerScrollTrigger from "./js/animations/footer";
import { navigation, navigationBadges, mobileMenu } from "./js/navigation";
import drawers from "./js/drawers";

window.addEventListener(
  "load",
  function () {
    mobileMenu();
    navigation();
    navigationBadges();
    banner();
    bannerScrollTrigger();
    gsapWorkScrollTrigger();
    hattiesEffectScrollTrigger();
    aboutScrollTrigger();
    icapScrollTrigger();
    resourcesScrollTrigger();
    footerScrollTrigger();
    carousel();
    resultsScrollTrigger();
    drawers();
  },
  false
);
