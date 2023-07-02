// colors
var mainColor = "#059cb1";
var whiteColor = "#fff";
var lightWhiteColor = "#eee";
var darkTransColor = "#000000d9";
var lightTransColor = "#ffffffcc";

// Language Dropdown Menu

// active language menu
// let lang = document.querySelector(".lang > .h-btn");
// let langMenu = document.querySelector(".lang > .menu");
// lang.onclick = function () {
//   if (lang.classList.contains("active")) {
//     lang.classList.remove("active");
//     langMenu.style.display = "none";
//   } else {
//     lang.classList.add("active");
//     langMenu.style.display = "block";
//   }
// };
// lang.onblur = function () {
//   lang.classList.remove("active");
//   langMenu.style.display = "none";
// };

// active account menu
let acc = document.querySelector(".acc > .h-btn");
let accMenu = document.querySelector(".acc > .menu");
// acc.onclick = function () {
//   if (acc.classList.contains("active")) {
//     acc.classList.remove("active");
//     accMenu.style.display = "none";
//   } else {
//     acc.classList.add("active");
//     accMenu.style.display = "block";
//   }
// };
acc.onclick = function (e) {
  accMenu.classList.toggle("active");
  e.stopPropagation();
};

document.addEventListener("click", (e) => {
  if (e.target !== acc && e.target !== accMenu) {
    if (accMenu.classList.contains("active")) {
      accMenu.classList.toggle("active");
    }
  }
});
accMenu.onclick = function (e) {
  e.stopPropagation();
};

// acc.onblur = function () {
//   acc.classList.remove("active");
//   accMenu.style.display = "none";
// };

// change header language icon and text
let headLangImage = document.querySelector(".lang > .h-btn div img");
let headLangText = document.querySelector(".lang > .h-btn span");
let langs = document.querySelectorAll(".lang > .menu ul li");
langs.forEach((lang) => {
  lang.addEventListener("click", function (e) {
    headLangImage.src = e.currentTarget.getAttribute("img-src");
    headLangText.innerText = e.currentTarget.getAttribute("lang-text");
    lang.classList.remove("active");
    menu.style.display = "none";
  });
});

// Dark Mode Button
let theme = document.querySelector(".theme > .h-btn");
let body = document.body;
let html = document.documentElement;
theme.onclick = function () {
  if (
    !body.classList.contains("dark") &&
    !html.classList.contains("dark") &&
    window.localStorage.getItem("theme") !== "dark"
  ) {
    body.classList.add("dark");
    html.classList.add("dark");
    window.localStorage.setItem("theme", "dark");
    // lightIcon.style.display = "none";
    // darkIcon.style.display = "block";
  } else {
    body.classList.remove("dark");
    html.classList.remove("dark");
    window.localStorage.setItem("theme", "light");
    // darkIcon.style.display = "none";
    // lightIcon.style.display = "block";
  }
};

if (window.localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  html.classList.add("dark");
  // lightIcon.style.display = "none";
  // darkIcon.style.display = "block";
}

// change nav color and position on scroll
let header = document.getElementById("navbar_top");
// document.addEventListener("DOMContentLoaded", function () {
//   window.addEventListener("scroll", function () {
//     if (window.scrollY > 30) {
//       header.classList.add("scroll");
//     } else {
//       header.classList.remove("scroll");
//     }
//   });
// });

let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener(
  "scroll",
  function handleScroll() {
    const scrollTopPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    if (window.pageYOffset === 0) {
      header.classList.remove("scroll");
    } else {
      header.classList.add("scroll");
      if (scrollTopPosition > lastScrollTop) {
        header.classList.add("scroll_down");
        header.classList.remove("scroll_up");
      } else if (scrollTopPosition < lastScrollTop) {
        header.classList.remove("scroll_down");
        header.classList.add("scroll_up");
      }
      lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
    }
  },
  false
);
