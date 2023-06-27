let aside = document.getElementById("aside");
let asideLinks = document.querySelectorAll("aside ul li a");
let message = document.getElementById("message");
let backBtn = document.getElementById("backBtn");

asideLinks.forEach((e) => {
  e.onclick = function () {
    aside.classList.remove("active");
    message.classList.add("active");
  };
});

backBtn.onclick = function () {
  aside.classList.add("active");
  message.classList.remove("active");
};
