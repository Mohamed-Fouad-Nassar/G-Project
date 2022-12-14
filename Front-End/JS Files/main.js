let navIcon = document.getElementById("navIcon");
let nav = document.getElementById("nav");
let ulLinks = document.getElementById("links");
navIcon.addEventListener("click", () => {
  if (navIcon.classList.contains("active")) {
    navIcon.classList.remove("active");
    nav.style.right = -nav.clientWidth + "px";
    nav.style.opacity = "0";
  } else {
    navIcon.classList.add("active");
    nav.style.right = "0";
    nav.style.opacity = "1";
  }
});

console.log(nav.style.width);
