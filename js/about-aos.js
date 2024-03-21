const linksItem = document.querySelectorAll(".marked-list li");
const staffList = document.querySelectorAll(".staff-list");

for (let i = 0; i < linksItem.length; i++) {
  linksItem[i].dataset.aosDelay = 100 * i;
  linksItem[i].dataset.aosAnchorPlacement = "bottom-bottom";
}

for (let i = 0; i < staffList.length; i++) {
  staffList[i].dataset.aosDelay = 200 * i;
  staffList[i].dataset.aosAnchorPlacement = "bottom-bottom";
}
