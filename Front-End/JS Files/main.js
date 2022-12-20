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
