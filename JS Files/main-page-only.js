// change active class
const li = document.querySelectorAll("li.link");
const sec = document.querySelectorAll("section");
function activeMenu() {
  let len = sec.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
  li.forEach((ltx) => ltx.classList.remove("active"));
  li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

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
