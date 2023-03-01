// forget password page cancel button
let cancelBtn = document.getElementById("cancel");
cancelBtn.addEventListener("click", function () {
  console.log("Click");
  window.history.back();
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
  } else {
    body.classList.remove("dark");
    html.classList.remove("dark");
    window.localStorage.setItem("theme", "light");
  }
};

if (window.localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  html.classList.add("dark");
}
