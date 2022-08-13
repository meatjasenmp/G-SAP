import "./css/styles.scss";
import banner from "./js/banner";
import carousel from "./js/carousel";
import charts from "./js/charts";

window.addEventListener(
  "load",
  function () {
    banner();
    carousel();
    charts();
  },
  false
);
