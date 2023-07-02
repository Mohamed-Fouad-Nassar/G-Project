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
    specialtyField.innerText =
      e.target.closest(".item").firstElementChild.children[1].innerText;
    locationField.innerText =
      e.target.closest(".item").firstElementChild.children[2].innerText;
    mailField.innerText =
      e.target.closest(".item").firstElementChild.children[3].innerText;
    phoneField.innerText =
      e.target.closest(".item").firstElementChild.children[4].innerText;
    imgSrcField.src =
      e.target.closest(".item").firstElementChild.children[5].innerText;
    imgSrcField.alt = "pharmacy-image";
    infoField.innerText =
      e.target.closest(".item").firstElementChild.children[6].innerText;
    facebookLinkField.innerText =
      e.target.closest(".item").firstElementChild.children[7].innerText;
    instagramLinkField.innerText =
      e.target.closest(".item").firstElementChild.children[8].innerText;
    twitterLinkField.innerText =
      e.target.closest(".item").firstElementChild.children[9].innerText;
    mailLinkField.innerText =
      e.target.closest(".item").firstElementChild.children[10].innerText;
    WhatsappLinkField.innerText =
      e.target.closest(".item").firstElementChild.children[11].innerText;
    phoneLinkField.innerText =
      e.target.closest(".item").firstElementChild.children[12].innerText;
    // active pop-up
    popup.classList.add("active");
  };
}
cancelBtn.onclick = () => {
  popup.classList.remove("active");
};

// sweet alert button
let removeBtns = document.querySelectorAll(".remove");
let alertAppend = function () {
  if (window.localStorage.getItem("theme") === "dark") {
    Swal.fire({
      icon: "success",
      title: "done",
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        popup: "sw-popup-dark",
        title: "sw-title-dark",
        icon: "sw-icon",
      },
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "done",
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        popup: "sw-popup",
        title: "sw-title",
        icon: "sw-icon",
      },
    });
  }
};
for (let btn of removeBtns) {
  btn.onclick = alertAppend;
}
