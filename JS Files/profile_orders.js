//choose categories
let switcher = document.querySelectorAll("#main_page .container .filter ul li");
let box = Array.from(document.querySelectorAll("#main_page .container .order"));
switcher.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", management);
});
function removeActive() {
  switcher.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}
function management() {
  box.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.content).forEach((cat) => {
    cat.style.display = "block";
  });
}

// load elements
let boxes = document.querySelectorAll(".container .content .sec-body .order");
let seeMoreBtn = document.querySelector(".container .sec-foot input");
let sectionFoot = document.querySelector(".container .sec-foot");
let start = 3;
// loop on elements
let loopElements = function (start, stop) {
  for (let i = start; i < stop; i++) {
    if (boxes[i] === undefined) break;
    boxes[i].classList.add("active");
  }
};
if (boxes.length === start) sectionFoot.style.display = "none";
// first six elements
loopElements(0, start);
let stop = start + 3;
// see more click
seeMoreBtn.addEventListener("click", function () {
  loopElements(start, stop);
  start = stop;
  stop += 3;
  if (
    start - 1 === boxes.length ||
    start - 2 === boxes.length ||
    start === boxes.length
  ) {
    sectionFoot.style.display = "none";
  }
});

// back to top button
let goUp = document.getElementById("up");
window.onscroll = function () {
  //show button onscroll at 700
  "use strict";
  if (window.pageYOffset >= 700) {
    goUp.style.display = "block";
  } else {
    goUp.style.display = "none";
  }
};
goUp.onclick = function () {
  //go up onclick
  "use strict";
  window.scrollTo(0, 0);
};
