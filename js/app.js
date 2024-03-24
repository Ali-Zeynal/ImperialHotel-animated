const $ = document;
const MobileMenuButton = $.querySelector(".nav-toggle-label");
const MobileMenuCheckbox = $.querySelector("#nav-toggle");
const toTopBtn = $.querySelector(".toTop-btn");
const navMenuItem = $.querySelectorAll(".nav-menu li a");
const menuDarkCover = $.querySelector("#cover");
const navMobileMenuItems = $.querySelectorAll(".nav-mobile-list li a");
const brandP1 = $.getElementById("brand-part1");
const aosElement = document.querySelectorAll("[data-aos]");

AOS.init();

window.addEventListener("load", function () {
  $.querySelector(".loader").style.display = "none";
  $.querySelector("body").style.visibility = "visible";
  navMenuItem.forEach((item) => {
  if (window.location.pathname == `/ImperialHotel-animated/${item.attributes.href.nodeValue}`) {
    item.style.color = "rgb(248, 170, 72)";
  } else if (!window.location.pathname.slice(15)) {
    navMenuItem[0].style.color = "rgb(248, 170, 72)";
  }
});
});

if (document.documentElement.clientWidth < 600) {
  aosElement.forEach((elem) => {
    elem.dataset.aos = "fade-up";
    elem.dataset.aosDuration = "700";
    elem.dataset.aosDelay = "50";
    elem.dataset.aosAnchorPlacement = "";
  });
}

MobileMenuButton.addEventListener("click", () => {
  menuDarkCover.classList.toggle("covering");
});

menuDarkCover.addEventListener("click", () => {
  MobileMenuCheckbox.click();
  menuDarkCover.classList.toggle("covering");
});

navMobileMenuItems.forEach((MobileMenuItem) => {
  MobileMenuItem.addEventListener("click", () => {
    MobileMenuCheckbox.click();
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 380 && $.documentElement.clientWidth > 600) {
    toTopBtn.style.opacity = "1";
  } else {
    toTopBtn.style.opacity = "0";
  }
});

toTopBtn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});



let brandP1Typewriter = new Typewriter(brandP1, {
  loop: true,
  delay: 75,
  cursor: "",
  autoStart: true,
});

brandP1Typewriter
  .typeString("Imperial <span>Hotel</span>")
  .pauseFor(2000)
  .deleteAll()
  .start();
