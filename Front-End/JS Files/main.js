let navIcon = document.getElementById("navIcon");
let nav = document.getElementById("nav");
let ulLinks = document.getElementById("links");
navIcon.addEventListener("click", () => {
  if (navIcon.classList.contains("active")) {
    navIcon.classList.remove("active");
    nav.style.opacity = "0";
    nav.style.zIndex = "-1";
  } else {
    navIcon.classList.add("active");
    nav.style.opacity = "1";
    nav.style.zIndex = "1000";
  }
});

// let active = document.querySelectorAll("li"); //for change active class
// let top = document.getElementById("home"); //for back to the top

// //active calss
// active.forEach((li) => {
//   li.addEventListener("click", function () {
//     active.forEach((li) => li.classList.remove("active"));
//     this.classList.add("active");
//   });
// });
// ///////////////
// //back to top
// top.onclick = function () {
//   "use strict";
//   window.scrollTo(0, 0);
// };
// //////////
