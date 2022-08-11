import Flickity from "flickity";

const carousel = () => {
  const element = document.querySelector(".carousel");
  if (!element) return;
  const flkty = new Flickity(element, {
    imagesLoaded: true,
    initialIndex: 1,
    wrapAround: true,
    freeScroll: true,
  });

  Flickity.prototype._createResizeClass = function () {
    this.element.classList.add("flickity-resize");
  };

  Flickity.createMethods.push("_createResizeClass");

  var resize = Flickity.prototype.resize;
  Flickity.prototype.resize = function () {
    this.element.classList.remove("flickity-resize");
    resize.call(this);
    this.element.classList.add("flickity-resize");
  };

  return flkty;
};

export default carousel;
