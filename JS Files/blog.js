// // older version:-
// // sec-body select
// let secBody = document.querySelector(".container .sec-body");

// // see more button select
// let seeMoreBtn = document.querySelector(".container .sec-foot input");

// // Variables
// let start = 0;
// let startNum = 6;
// let StopNum = startNum + 3;

// // import blog API
// import { blogAPI } from "./APIs.js";

// // calling blogAPI function
// blogAPI("../Test APIs/blog.json", start, startNum, secBody);

// // see More Button
// seeMoreBtn.addEventListener("click", function () {
//   blogAPI("../Test APIs/blog.json", startNum, StopNum, secBody);
//   startNum += 3;
//   StopNum = startNum + 3;
// });

// new version:-
let pages = document.querySelectorAll(".container .sec-body .page");
let seeMoreBtn = document.querySelector(".container .sec-foot input");
let footSec = document.querySelector(".container .sec-foot");
let index = 1;
seeMoreBtn.addEventListener("click", function () {
  pages[index].style.display = "grid";
  index++;
  if (index == pages.length - 1) {
    footSec.style.display = "none";
  }
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
