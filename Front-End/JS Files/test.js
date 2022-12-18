let ele = document.getElementsByClassName("field");
let inp = document.getElementsByClassName("input");
let fIcon = document.getElementsByClassName("f-icon");
// input 1
inp[0].onfocus = function () {
  ele[0].style.cssText = "border-bottom-color: #ed4342";
  fIcon[0].style.cssText = "color: #ed4342";
};
inp[0].onblur = function () {
  ele[0].style.cssText = "border-bottom-color: #e67a7a";
  fIcon[0].style.cssText = "color: #e67a7a";
};

// input 1
inp[1].onfocus = function () {
  ele[1].style.cssText = "border-bottom-color: #ed4342";
  fIcon[1].style.cssText = "color: #ed4342";
};
inp[1].onblur = function () {
  ele[1].style.cssText = "border-bottom-color: #e67a7a";
  fIcon[1].style.cssText = "color: #e67a7a";
};
