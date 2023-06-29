let seeDetailsBtns = document.querySelectorAll(".seeMore");
let popup = document.querySelector(".pop-up");
let cancelBtn = document.getElementById("cancel");

seeDetailsBtns.forEach((e) => {
  e.onclick = () => {
    popup.classList.add("active");
  };
});

cancelBtn.onclick = () => {
  popup.classList.remove("active");
};
