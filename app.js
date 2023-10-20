let tdElem = document.querySelectorAll("#DoNow");
let todayTime = new Date("October 21, 2023 10:50:00");
//  in Date() for test
let daytime = todayTime.getDay();
let hourTime = todayTime.getHours();
let minutesTime = todayTime.getMinutes();
let timeNow = hourTime + minutesTime / 60;
let tdArray = Array.from(tdElem);
let doBox = [];
tdArray.map(function (e) {
  if (e.dataset.day == daytime) {
    doBox.push(e);
  }
});
function showDo() {
  if (daytime == 6) {
    if (timeNow >= 8 && timeNow < 11) {
      doBox[0].style.backgroundColor = "#5bbefc";
      Array.from(doBox[0].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 11 && timeNow < 13) {
      doBox[1].style.backgroundColor = "#5bbefc";
      Array.from(doBox[1].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 13 && timeNow < 16) {
      doBox[2].style.backgroundColor = "#5bbefc";
      Array.from(doBox[2].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 16 && timeNow < 18) {
      doBox[3].style.backgroundColor = "#5bbefc";
      Array.from( doBox[3].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 18 && timeNow < 20) {
      doBox[4].style.backgroundColor = "#5bbefc";
      Array.from(doBox[4].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 20 && timeNow < 21) {
      doBox[5].style.backgroundColor = "#5bbefc";
      Array.from(doBox[5].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 21 && timeNow < 22) {
      doBox[6].style.backgroundColor = "#5bbefc";
      Array.from(doBox[6].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 22 && timeNow < 23) {
      doBox[7].style.backgroundColor = "#5bbefc";
      Array.from(doBox[7].children)[0].children[0].style.color = "#010072";
    }
  }
  if (daytime == 0) {
    if (timeNow >= 8 && timeNow < 10) {
      doBox[0].style.backgroundColor = "#5bbefc";
      Array.from(doBox[0].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 10 && timeNow < 12) {
      doBox[1].style.backgroundColor = "#5bbefc";
      Array.from(doBox[1].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 12 && timeNow < 15) {
      doBox[2].style.backgroundColor = "#5bbefc";
      Array.from(doBox[2].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 15 && timeNow < 17) {
      doBox[3].style.backgroundColor = "#5bbefc";
      Array.from(doBox[3].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 17 && timeNow < 19) {
      doBox[4].style.backgroundColor = "#5bbefc";
      Array.from(doBox[4].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 19 && timeNow < 21) {
      doBox[5].style.backgroundColor = "#5bbefc";
      Array.from(doBox[5].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 21 && timeNow < 22) {
      doBox[6].style.backgroundColor = "#5bbefc";
      Array.from(doBox[6].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 22 && timeNow < 23) {
      doBox[7].style.backgroundColor = "#5bbefc";
      Array.from(doBox[7].children)[0].children[0].style.color = "#010072";
    }
  }
  if (daytime == 1) {
    if (timeNow >= 8 && timeNow < 9) {
      doBox[0].style.backgroundColor = "#5bbefc";
      Array.from(doBox[0].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 9 && timeNow < 10) {
      doBox[1].style.backgroundColor = "#5bbefc";
      Array.from(doBox[1].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 10 && timeNow < 12) {
      doBox[2].style.backgroundColor = "#5bbefc";
      Array.from(doBox[2].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 12 && timeNow < 16) {
      doBox[3].style.backgroundColor = "#5bbefc";
      Array.from(doBox[3].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 16 && timeNow < 17) {
      doBox[4].style.backgroundColor = "#5bbefc";
      Array.from(doBox[4].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 17 && timeNow < 19) {
      doBox[5].style.backgroundColor = "#5bbefc";
      Array.from(doBox[5].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 19 && timeNow < 22) {
      doBox[6].style.backgroundColor = "#5bbefc";
      Array.from(doBox[6].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 22 && timeNow < 23) {
      doBox[7].style.backgroundColor = "#5bbefc";
      Array.from(doBox[7].children)[0].children[0].style.color = "#010072";
    }
  }
  if (daytime == 2) {
    if (timeNow >= 10 && timeNow < 12) {
      doBox[0].style.backgroundColor = "#5bbefc";
      Array.from(doBox[0].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 12 && timeNow < 14) {
      doBox[1].style.backgroundColor = "#5bbefc";
      Array.from(doBox[1].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 14 && timeNow < 15) {
      doBox[2].style.backgroundColor = "#5bbefc";
      Array.from(doBox[2].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 15 && timeNow < 18) {
      doBox[3].style.backgroundColor = "#5bbefc";
      Array.from(doBox[3].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 18 && timeNow < 21) {
      doBox[4].style.backgroundColor = "#5bbefc";
      Array.from(doBox[4].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 21 && timeNow < 22) {
      doBox[5].style.backgroundColor = "#5bbefc";
      Array.from(doBox[5].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 22 && timeNow < 23) {
      doBox[6].style.backgroundColor = "#5bbefc";
      Array.from(doBox[6].children)[0].children[0].style.color = "#010072";
    }
  }
  if (daytime == 3) {
    if (timeNow >= 8 && timeNow < 10) {
      doBox[0].style.backgroundColor = "#5bbefc";
      Array.from(doBox[0].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 10 && timeNow < 12) {
      doBox[1].style.backgroundColor = "#5bbefc";
      Array.from(doBox[1].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 12 && timeNow < 15) {
      doBox[2].style.backgroundColor = "#5bbefc";
      Array.from(doBox[2].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 15 && timeNow < 17) {
      doBox[3].style.backgroundColor = "#5bbefc";
      Array.from(doBox[3].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 17 && timeNow < 19) {
      doBox[4].style.backgroundColor = "#5bbefc";
      Array.from(doBox[4].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 19 && timeNow < 22) {
      doBox[5].style.backgroundColor = "#5bbefc";
      Array.from(doBox[5].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 22 && timeNow < 23) {
      doBox[6].style.backgroundColor = "#5bbefc";
      Array.from(doBox[6].children)[0].children[0].style.color = "#010072";
    }
  }
  if (daytime == 4) {
    if (timeNow >= 10 && timeNow < 12) {
      doBox[0].style.backgroundColor = "#5bbefc";
      Array.from(doBox[0].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 12 && timeNow < 14) {
      doBox[1].style.backgroundColor = "#5bbefc";
      Array.from(doBox[1].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 14 && timeNow < 15) {
      doBox[2].style.backgroundColor = "#5bbefc";
      Array.from(doBox[2].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 15 && timeNow < 18) {
      doBox[3].style.backgroundColor = "#5bbefc";
      Array.from(doBox[3].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 18 && timeNow < 21) {
      doBox[4].style.backgroundColor = "#5bbefc";
      Array.from(doBox[4].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 21 && timeNow < 22) {
      doBox[5].style.backgroundColor = "#5bbefc";
      Array.from(doBox[5].children)[0].children[0].style.color = "#010072";
    }
    if (timeNow >= 22 && timeNow < 23) {
      doBox[6].style.backgroundColor = "#5bbefc";
      Array.from(doBox[6].children)[0].children[0].style.color = "#010072";
    }
  }
  if (daytime == 5) {
    doBox[0].style.backgroundColor = "#5bbefc";
    Array.from(doBox[0].children)[0].children[0].style.color = "#010072";
  }
  if (timeNow >= 23 || timeNow < 8) {
    let div = document.querySelector("#table");
    div.innerHTML =
      "<h1 style='background-color: #5bbefc; margin-top: 300px; font-size: 100px; color : #010072 ;padding : 30px; border-radius : 30px;'>پایان زمان بندی</h1>";
  }
}
window.addEventListener("load", function () {
  showDo();
});
