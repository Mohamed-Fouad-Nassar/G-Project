let ele = document.getElementsByClassName("field");

fieldOne.onfocus = function () {
  ele[0].style.borderColor = "#aaa";
};

fieldOne.onblur = function () {
  ele[0].style.borderColor = "#000";
};
