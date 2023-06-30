let seeDetailsBtns = document.querySelectorAll(".seeMore");
let popup = document.querySelector(".pop-up");
let popupData = document.querySelector(".pop-up .data");
let popupOverlay = document.querySelector(".pop-up .overlay");
let cancelBtn = document.getElementById("cancel");

for (let btn of seeDetailsBtns) {
  btn.onclick = (e) => {
    console.log(e.target.closest(".item").firstElementChild.children);

    // add data to pop-up
    nameField.innerText =
      e.target.closest(".item").firstElementChild.children[0].innerText;

    locationField.innerText =
      e.target.closest(".item").firstElementChild.children[1].innerText;

    mailField.innerText =
      e.target.closest(".item").firstElementChild.children[2].innerText;

    phoneField.innerText =
      e.target.closest(".item").firstElementChild.children[3].innerText;

    imgSrcField.src =
      e.target.closest(".item").firstElementChild.children[4].innerText;
    imgSrcField.alt = "pharmacy-image";

    infoField.innerText =
      e.target.closest(".item").firstElementChild.children[5].innerText;

    facebookLinkField.innerText =
      e.target.closest(".item").firstElementChild.children[6].innerText;

    twitterLinkField.innerText =
      e.target.closest(".item").firstElementChild.children[7].innerText;

    mailLinkField.innerText =
      e.target.closest(".item").firstElementChild.children[8].innerText;

    WhatsappLinkField.innerText =
      e.target.closest(".item").firstElementChild.children[9].innerText;

    phoneLinkField.innerText =
      e.target.closest(".item").firstElementChild.children[10].innerText;

    // active pop-up
    popup.classList.add("active");
  };
}

cancelBtn.onclick = () => {
  popup.classList.remove("active");
};
