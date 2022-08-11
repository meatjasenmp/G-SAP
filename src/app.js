import "./css/styles.scss";
import banner from "./js/banner";
import carousel from "./js/carousel";

window.addEventListener(
  "load",
  function () {
    banner();
    carousel();
  },
  false
);
