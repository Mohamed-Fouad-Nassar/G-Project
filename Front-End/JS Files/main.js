//fixed nav-bar
let header= document.getElementById('navbar_top');
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
        header.classList.add("navScroll"); //change nav styling
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
        header.classList.remove("navScroll"); //back to first style

      } 
  });
});
//////////////


//change active class
const li= document.querySelectorAll(".links");
const sec= document.querySelectorAll("section");
 function activeMenu(){
  let len= sec.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop ) {}
  li.forEach(ltx => ltx.classList.remove("active"));
  li[len].classList.add("active");
 }
 activeMenu();
 window.addEventListener("scroll", activeMenu);

//nav for small screen
let navIcon = document.getElementById("navIcon");
let nav = document.getElementById("nav");
let ulLinks = document.getElementById("links");
navIcon.addEventListener("click", () => {
  if (navIcon.classList.contains("active")) {
    navIcon.classList.remove("active");
    nav.style.opacity = "0";
    nav.style.zIndex = "-1";
  } else {
    navIcon.classList.add("active");
    nav.style.opacity = "1";
    nav.style.zIndex = "1000";
  }
});
/////

//back to top button
let goUp = document.getElementById('up');
window.onscroll = function () { //show button onscroll at 700
  'use strict';
  if (window.pageYOffset >= 700){
    goUp.style.display = 'block';
  }
  else{
    goUp.style.display = 'none';
  }
}

goUp.onclick = function (){ //go up onclick
  'use strict';
  window.scrollTo(0,0);
}
