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

export const banner = () => {
  const siteBanner = document.querySelector(".site_banner");
  if (siteBanner) {
    const bannerImagesContainer = siteBanner.querySelector(".banner_images");
    const images = siteBanner.querySelectorAll(".banner_image");
    const imagesLoaded = images[0].complete && images[0].naturalHeight !== 0;

    if (imagesLoaded) {
      let imageHeight = images[0].clientHeight;
      console.log(imageHeight);

      const setContainerHeight = () => {
        imageHeight = images[0].clientHeight;
        bannerImagesContainer.style.height = imageHeight + "px";
      };

      window.addEventListener("resize", debounce(setContainerHeight, 100));

      setContainerHeight();
    }
  }

  return null;
};

export default banner;
