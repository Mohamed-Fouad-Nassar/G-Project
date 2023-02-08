// Language Dropdown Menu
// active menu
let lang = document.querySelector(".lang > .h-btn");
let menu = document.querySelector(".lang > .menu");
lang.onclick = function () {
  if (lang.classList.contains("active")) {
    lang.classList.remove("active");
    menu.style.display = "none";
  } else {
    lang.classList.add("active");
    menu.style.display = "block";
  }
};
lang.onblur = function () {
  lang.classList.remove("active");
  menu.style.display = "none";
};
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
// let header = document.getElementById("navbar_top");
let main = document.getElementById("main_page");
theme.onclick = function () {
  if (main.classList.contains("dark") || header.classList.contains("dark")) {
    main.classList.remove("dark");
    header.classList.remove("dark");
    document.body.style.background = "#fff";
  } else {
    main.classList.add("dark");
    header.classList.add("dark");
    document.body.style.background = "#000";
  }
};
