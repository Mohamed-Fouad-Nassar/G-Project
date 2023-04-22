// variables
let asideLinks = document.querySelectorAll(".aside-link a");
let contentDivs = document.querySelectorAll("section.content > div");
let mainDash = document.getElementById("dash");

// add active class on the open and reopen page
if (sessionStorage.getItem("activeSection") === null) {
  document.querySelector(`div[data-name="dashboard"]`).classList.add("active");
  document.querySelector(`a[data-name="dashboard"]`).classList.add("active");
} else {
  document
    .querySelector(
      `div[data-name="${window.sessionStorage.getItem("activeSection")}"]`
    )
    .classList.add("active");
  document
    .querySelector(
      `a[data-name="${window.sessionStorage.getItem("activeSection")}"]`
    )
    .classList.add("active");
}

// aside links
asideLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // remove active class from all links
    asideLinks.forEach((link) => {
      link.classList.remove("active");
    });
    // add active class to selected link
    e.currentTarget.classList.add("active");
    window.sessionStorage.setItem(
      "activeSection",
      e.currentTarget.dataset.name
    );
    // remove active class from all divs
    contentDivs.forEach((div) => {
      div.classList.remove("active");
    });
    // add active class to selected div
    document
      .querySelector(`div[data-name="${e.currentTarget.dataset.name}"]`)
      .classList.add("active");
  });
});

// content section
mainDash.addEventListener("click", () => {
  // remove active class from all links
  asideLinks.forEach((link) => {
    link.classList.remove("active");
  });
  // add active class to selected link
  asideLinks[0].classList.add("active");
  // remove active class from all divs
  contentDivs.forEach((div) => {
    div.classList.remove("active");
  });
  // add active class to selected div
  contentDivs[0].classList.add("active");
  window.sessionStorage.removeItem("activeSection");
});
