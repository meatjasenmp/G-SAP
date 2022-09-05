import "./css/styles.scss";
import banner from "./js/banner";
import carousel from "./js/carousel";
import charts from "./js/charts";
import bannerScrollTrigger from "./js/animations/banner";
import gsapWorkScrollTrigger from "./js/animations/gsap_work";
import hattiesEffectScrollTrigger from "./js/animations/hatties-effect";
import aboutScrollTrigger from "./js/animations/about";
import icapScrollTrigger from "./js/animations/icap";
import resourcesScrollTrigger from "./js/animations/resources";
import footerScrollTrigger from "./js/animations/footer";
import { navigation, navigationBadges, mobileMenu } from "./js/navigation";

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
    charts();
  },
  false
);
