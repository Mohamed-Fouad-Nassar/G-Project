let seeDetailsBtns = document.querySelectorAll(".seeMore");
let popup = document.querySelector(".pop-up");
let popupData = document.querySelector(".pop-up .data");
let popupOverlay = document.querySelector(".pop-up .overlay");
let cancelBtn = document.getElementById("cancel");

// seeDetailsBtns.forEach((element) => {
//   element.onclick = (e) => {
//     popup.classList.toggle("active");
//     e.stopPropagation();
//   };
// });
// document.addEventListener("click", (e) => {
//   if (e.target === popupOverlay) {
//     // if (popup.classList.contains("active")) {
//     //   popup.classList.toggle("active");
//     // }
//     console.log("click");
//   }
// });
// popup.onclick = function (e) {
//   e.stopPropagation();
// };
// cancelBtn.onclick = () => {
//   popup.classList.toggle("active");
// };

// seeDetailsBtns.forEach((e) => {
//   e.onclick = () => {
//     popup.classList.add("active");
//   };
// });
cancelBtn.onclick = () => {
  popup.classList.remove("active");
};

for (let btn of seeDetailsBtns) {
  btn.onclick = (e) => {
    // console.log(e.target.closest(".item").firstElementChild.children);
    // imgSrc.setAttribute("src", "../Data/Images/bg10.jpeg");

    // add data to pop-up
    nameField.innerText =
      e.target.closest(".item").firstElementChild.children[0].innerText;
    categoryField.innerText =
      e.target.closest(".item").firstElementChild.children[1].innerText;
    quantityField.innerText =
      e.target.closest(".item").firstElementChild.children[2].innerText;
    document.querySelector(".pop-up .data .image img").src =
      e.target.closest(".item").firstElementChild.children[3].innerText;
    document.querySelector(".pop-up .data .image img").alt = "medicine-image";

    // active pop-up
    popup.classList.add("active");

    // console.log(e.target.closest(".item").firstElementChild);
    // console.log(e.target.parentElement.firstElementChild);
    // console.log(e.target.closest(" .hidden span:first-of-type"));
    // console.log(e.target.closest(" .hidden span:nth-of-type(2)"));
    // console.log(e.target.closest(" .hidden span:nth-of-type(3)"));
    // console.log(e.target.closest(" .hidden span:last-of-type"));
  };
  // console.log(btn);
}
