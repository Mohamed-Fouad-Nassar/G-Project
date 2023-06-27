// back button
let cancelBtn = document.getElementById("cancel");
cancelBtn.addEventListener("click", function () {
  window.history.back();
});

//choose categories
let switcher= document.querySelectorAll("#main_page .medicines .cat ul li");
let box= Array.from(document.querySelectorAll("#main_page .medicines form .cards .box"));

switcher.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", managment)

});

function removeActive(){
    switcher.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}

function managment(){
    box.forEach((img) => {
        img.style.display= 'none';
    });

    document.querySelectorAll(this.dataset.content).forEach((cat) => {
        cat.style.display= 'block';
    })
}
//////////////


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

// load boxes
let boxes = document.querySelectorAll(".container .cards .box");
let seeMoreBtn = document.querySelector(".container .sec-foot input");
let sectionFoot = document.querySelector(".container .sec-foot");
let start = 8;
// loop on elements
let loopElements = function (start, stop) {
  for (let i = start; i < stop; i++) {
    if (boxes[i] === undefined) break;
    boxes[i].classList.add("active");
  }
};
// first six elements
loopElements(0, start);
let stop = start + 4;
// see more click
seeMoreBtn.addEventListener("click", function () {
  loopElements(start, stop);
  start = stop;
  stop += 4;
  if (
    start - 1 === boxes.length ||
    start - 2 === boxes.length ||
    start - 3 === boxes.length ||
    start === boxes.length
  ) {
    sectionFoot.style.display = "none";
  }
});
