//choose categories
let switcher= document.querySelectorAll("#main_page .sec-body .med .left-side ul li");
let box= Array.from(document.querySelectorAll("#main_page .sec-body .med .right-side .card"));

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

//categories side bar for small screen
let togglebtn= document.querySelector("#main_page .sec-body .med .filter");
let bar = document.querySelector("#main_page .sec-body .med .left-side");
togglebtn.onclick= function(e) {
    bar.classList.toggle("open");
    e.stopPropagation();
};


document.addEventListener("click", (e) => {
    if(e.target !== togglebtn && e.target !== bar){
        if(bar.classList.contains("open")){
            bar.classList.toggle("open");
        }
    }
});

bar.onclick= function (e) {
    e.stopPropagation();
}

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