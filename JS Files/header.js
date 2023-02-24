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
let body = document.body;
theme.onclick = function () {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
};
