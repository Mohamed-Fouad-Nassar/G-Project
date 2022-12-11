let ele = document.getElementsByClassName("field");
let inp = document.getElementsByClassName("input");
let fIcon = document.getElementsByClassName("f-icon");
// input 1
inp[0].onfocus = function () {
  ele[0].style.cssText = "border-bottom-color: #aaa";
  fIcon[0].style.cssText = "color: #aaa";
};
inp[0].onblur = function () {
  ele[0].style.cssText = "border-bottom-color: #000";
  fIcon[0].style.cssText = "color: #000";
};

// input 1
inp[1].onfocus = function () {
  ele[1].style.cssText = "border-bottom-color: #aaa";
  fIcon[1].style.cssText = "color: #aaa";
};
inp[1].onblur = function () {
  ele[1].style.cssText = "border-bottom-color: #000";
  fIcon[1].style.cssText = "color: #000";
};
