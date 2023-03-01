// colors
var mainColor = "#059cb1";
var whiteColor = "#fff";
var lightWhiteColor = "#eee";
var darkTransColor = "#000000d9";
var lightTransColor = "#ffffffcc";

// change nav color and position on scroll
let header = document.getElementById("navbar_top");
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 30) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  });
});
