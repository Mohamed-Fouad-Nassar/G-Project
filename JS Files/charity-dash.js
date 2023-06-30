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
    imgSrcField.alt = "charity-image";

    infoField.innerText =
      e.target.closest(".item").firstElementChild.children[5].innerText;

    facebookLinkField.innerText =
      e.target.closest(".item").firstElementChild.children[6].innerText;

    instagramLinkField.innerText =
      e.target.closest(".item").firstElementChild.children[7].innerText;

    twitterLinkField.innerText =
      e.target.closest(".item").firstElementChild.children[8].innerText;

    mailLinkField.innerText =
      e.target.closest(".item").firstElementChild.children[9].innerText;

    WhatsappLinkField.innerText =
      e.target.closest(".item").firstElementChild.children[10].innerText;

    phoneLinkField.innerText =
      e.target.closest(".item").firstElementChild.children[11].innerText;

    let eventsImages = document.querySelectorAll(
      ".pop-up .data .box .images section img"
    );
    let i;
    for (let image of eventsImages) {
      i = 0;
      image.src =
        e.target.closest(".item").firstElementChild.children[12].children[
          i
        ].innerText;
      image.alt = "charity-event-image";
      i++;
    }
    // active pop-up
    popup.classList.add("active");
  };
}

cancelBtn.onclick = () => {
  popup.classList.remove("active");
};
