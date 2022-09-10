const drawers = () => {
  const drawerButton = document.querySelectorAll(".drawer-button");

  drawerButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      const drawerId = e.target.getAttribute("data-drawer");
      const drawer = document.getElementById(drawerId);
      drawer.classList.toggle("closed");
    });
  });
};

export default drawers;
