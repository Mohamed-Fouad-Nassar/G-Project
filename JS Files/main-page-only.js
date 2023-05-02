// charities slider
var swiper = new Swiper(".slider-container", {
  slidesPerView: 3,
  spaceBetween: 15,
  sliderPerGroup: 3,
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
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

// change active class
const lis = document.querySelectorAll("nav ul li");
const sec = document.querySelectorAll("section.section");
function activeMenu() {
  let len = sec.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
  lis.forEach((ltx) => ltx.classList.remove("active"));
  lis[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

// // use pharmacies api
// let pharmacySecBody = document.getElementById("pharmacy-body");
// import { pharmaciesAPI as pharmacy } from "./APIs.js";
// pharmacy("../Test APIs/pharmacy.json", 0, 3, pharmacySecBody);

// // use blog api
// let blogSecBody = document.getElementById("blog-body");
// import { blogAPI as blog } from "./APIs.js";
// blog("../Test APIs/blog.json", 0, 3, blogSecBody);

// new added
// change year automatically in copyright section
let year = document.getElementById("copyright");
year.innerText = new Date().getFullYear();
year.style.cssText =
  "font-family:inherit; font-size:inherit; font-weight:inherit; color:#aaa !important;";
