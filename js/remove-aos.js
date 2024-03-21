const aosElement = document.querySelectorAll("[data-aos]");

if (document.documentElement.clientWidth < 600) {
  aosElement.forEach((elem) => {
    elem.dataset.aos = "fade-up";
    elem.dataset.aosDuration = "700";
    elem.dataset.aosDelay = "50";
    elem.dataset.aosAnchorPlacement = "";
  });
}
