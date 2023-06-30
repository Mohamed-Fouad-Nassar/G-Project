let seeDetailsBtns = document.querySelectorAll(".seeMore");
let popup = document.querySelector(".pop-up");
let popupData = document.querySelector(".pop-up .data");
let popupOverlay = document.querySelector(".pop-up .overlay");
let cancelBtn = document.getElementById("cancel");

for (let btn of seeDetailsBtns) {
  btn.onclick = (e) => {
    console.log(e.target.closest(".item").firstElementChild.children);

    // add data to pop-up
    titleField.innerText =
      e.target.closest(".item").firstElementChild.children[0].innerText;

    categoryField.innerText =
      e.target.closest(".item").firstElementChild.children[1].innerText;

    authorField.innerText =
      e.target.closest(".item").firstElementChild.children[2].innerText;

    videoLinkField.innerText =
      e.target.closest(".item").firstElementChild.children[3].innerText;

    imgSrcField.src =
      e.target.closest(".item").firstElementChild.children[4].innerText;
    imgSrcField.alt = "charity-image";

    bodyField.innerText =
      e.target.closest(".item").firstElementChild.children[5].innerText;

    likesField.innerText =
      e.target.closest(".item").firstElementChild.children[6].innerText;

    savesField.innerText =
      e.target.closest(".item").firstElementChild.children[7].innerText;

    // active pop-up
    popup.classList.add("active");
  };
}

cancelBtn.onclick = () => {
  popup.classList.remove("active");
};
