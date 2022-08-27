import Flickity from "flickity";

const carousel = () => {
  const element = document.querySelector(".carousel");
  const carouselNext = document.querySelector(".carousel-next");
  const carouselPrev = document.querySelector(".carousel-prev");
  if (!element) return;
  const flkty = new Flickity(element, {
    imagesLoaded: true,
    initialIndex: 1,
    wrapAround: true,
    prevNextButtons: false,
  });

  carouselNext.addEventListener("click", function () {
    flkty.next(true);
  });

  carouselPrev.addEventListener("click", function () {
    flkty.previous(true);
  });

  return flkty;
};

export default carousel;
