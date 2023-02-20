// forget password page cancel button
let cancelBtn = document.getElementById("cancel");
cancelBtn.addEventListener("click", function () {
  console.log("Click");
  window.history.back();
});
