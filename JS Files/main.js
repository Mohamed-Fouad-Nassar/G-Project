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

// test

const slider = document.querySelector(".slider");
const firstSlide = slider.querySelectorAll(".slider .slide")[0],
  arrowIcons = document.querySelectorAll(".slider .icon");

let isDragStart = false,
  prevPageX,
  prevScrollLeft;

let isDragging = false,
  positionDiff;

const showHideIcons = () => {
  let scrollWidth = slider.scrollWidth - slider.clientWidth;
  arrowIcons[0].style.display = slider.scrollLeft == 0 ? "none" : "flex";
  arrowIcons[1].style.display =
    slider.scrollLeft == scrollWidth ? "none" : "flex";
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstSlideWidth = firstSlide.clientWidth + 14;
    slider.scrollLeft += icon.id == "left" ? -firstSlideWidth : firstSlideWidth;
    setTimeout(() => showHideIcons(), 60);
  });
});

const autoSlide = () => {
  if (
    slider.scrollLeft - (slider.scrollWidth - slider.clientWidth) > -1 ||
    slider.scrollLeft <= 0
  )
    return;
  positionDiff = Math.abs(positionDiff);
  let firstSlideWidth = firstSlide.clientWidth + 14;
  let valDifference = firstSlideWidth - positionDiff;
  if (slider.scrollLeft > prevScrollLeft) {
    return (slider.scrollLeft +=
      positionDiff > firstSlideWidth / 3 ? valDifference : -positionDiff);
  }
  slider.scrollLeft -=
    positionDiff > firstSlideWidth / 3 ? valDifference : -positionDiff;
};

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = slider.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  slider.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  slider.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
};

const dragStop = () => {
  isDragStart = false;
  slider.classList.remove("dragging");
  if (!isDragging) return;
  isDragging = false;
  autoSlide();
};

slider.addEventListener("mousedown", dragStart);
slider.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
slider.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
slider.addEventListener("touchend", dragStop);
