// sec-body select
let secBody = document.querySelector(".container .sec-body");

// see more button select
let seeMoreBtn = document.querySelector(".container .sec-foot input");

// Variables
let start = 0;
let startNum = 3;
let StopNum = startNum + 3;

// import elements
import { pharmaciesAPI } from "./APIs.js";

// calling pharmacies API
pharmaciesAPI("../Test APIs/pharmacy.json", start, startNum, secBody);

// see More Button
seeMoreBtn.addEventListener("click", function () {
  pharmaciesAPI("../Test APIs/pharmacy.json", startNum, StopNum, secBody);
  startNum += 3;
  StopNum = startNum + 3;
});

// back to top button
let goUp = document.getElementById("up");
window.onscroll = function () {
  //show button onscroll at 700
  "use strict";
  if (window.pageYOffset >= 700) {
    goUp.style.display = "block";
  } else {
    goUp.style.display = "none";
  }
};
goUp.onclick = function () {
  //go up onclick
  "use strict";
  window.scrollTo(0, 0);
};
