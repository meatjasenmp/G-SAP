const debounce = (func, delay) => {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};

const banner = () => {
  const siteBanner = document.querySelector(".site_banner");
  if (siteBanner) {
    const bannerImagesContainer = siteBanner.querySelector(".banner_images");
    const images = siteBanner.querySelectorAll(".banner_image");
    let imageHeight = images[0].clientHeight;

    const setContainerHeight = () => {
      imageHeight = images[0].clientHeight;
      bannerImagesContainer.style.height = imageHeight + "px";
    };

    window.addEventListener("resize", debounce(setContainerHeight, 100));

    setContainerHeight();
  }
  return null;
};

export default banner;
