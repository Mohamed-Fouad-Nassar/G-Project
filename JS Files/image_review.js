// user image preview
let userImage = document.querySelector("#imagePreview");
let uploadedImage = document.querySelector("#imageUpload");

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      userImage.setAttribute("src", e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

uploadedImage.addEventListener("change", function () {
  readURL(this);
});
