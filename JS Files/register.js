let errorSpans = document.getElementsByClassName("error");

let fName = document.getElementById("f-name");
let lName = document.getElementById("l-name");
let mail = document.getElementById("mail-field");
let pass = document.getElementById("pass-field");
let confirmPass = document.getElementById("confirm-pass-field");
let terms = document.getElementById("terms");

// first name validation
fName.oninput = () => {
  if (fName.value.match("mohamed")) {
    // console.log("Valid fName");
    fName.parentElement.classList.add("success-message");
    fName.parentElement.classList.remove("error-message");
    errorSpans[0].style.display = "none";
  } else if (
    fName.value === "" ||
    lName.value.length >= 3 ||
    lName.value.length < 100
  ) {
    // console.log("Invalid fName");
    fName.parentElement.classList.add("error-message");
    fName.parentElement.classList.remove("success-message");
    errorSpans[0].style.display = "block";
  } else {
    // console.log("Invalid fName");
    fName.parentElement.classList.add("error-message");
    fName.parentElement.classList.remove("success-message");
    errorSpans[0].style.display = "block";
  }
};
// last name validation
lName.oninput = () => {
  if (lName.value.match("nassar")) {
    // console.log("Valid lName");
    lName.parentElement.classList.add("success-message");
    lName.parentElement.classList.remove("error-message");
    errorSpans[1].style.display = "none";
  } else if (
    lName.value === "" ||
    lName.value.length >= 3 ||
    lName.value.length < 100
  ) {
    // console.log("Invalid lName");
    lName.parentElement.classList.add("error-message");
    lName.parentElement.classList.remove("success-message");
    errorSpans[1].style.display = "block";
  } else {
    // console.log("Invalid lName");
    lName.parentElement.classList.add("error-message");
    lName.parentElement.classList.remove("success-message");
    errorSpans[1].style.display = "block";
  }
};
// e-mail validation
mail.oninput = () => {
  if (mail.value.match("mohammednassar750@gmail.com")) {
    // console.log("Valid mail");
    mail.parentElement.classList.add("success-message");
    mail.parentElement.classList.remove("error-message");
    errorSpans[2].style.display = "none";
  } else if (mail.value === "") {
    // console.log("Invalid mail");
    mail.parentElement.classList.add("error-message");
    mail.parentElement.classList.remove("success-message");
    errorSpans[2].style.display = "block";
  } else {
    // console.log("Invalid mail");
    mail.parentElement.classList.add("error-message");
    mail.parentElement.classList.remove("success-message");
    errorSpans[2].style.display = "block";
  }
};
// password validation
pass.oninput = () => {
  if (pass.value.match("11111111")) {
    // console.log("Valid pass");
    pass.parentElement.classList.add("success-message");
    pass.parentElement.classList.remove("error-message");
    errorSpans[3].style.display = "none";
  } else if (
    pass.value === "" ||
    pass.value.length < 8 ||
    pass.value.length > 100
  ) {
    // console.log("Invalid pass");
    pass.parentElement.classList.add("error-message");
    pass.parentElement.classList.remove("success-message");
    errorSpans[3].style.display = "block";
  } else {
    // console.log("Invalid pass");
    pass.parentElement.classList.add("error-message");
    pass.parentElement.classList.remove("success-message");
    errorSpans[3].style.display = "block";
  }
};
// confirm password validation
confirmPass.oninput = () => {
  if (confirmPass.value.match("11111111") && confirmPass.value === pass.value) {
    // console.log("Valid confirmPass");
    confirmPass.parentElement.classList.add("success-message");
    confirmPass.parentElement.classList.remove("error-message");
    errorSpans[4].style.display = "none";
  } else if (
    confirmPass.value === "" ||
    confirmPass.value.length < 8 ||
    confirmPass.value.length > 100
  ) {
    // console.log("Invalid confirmPass");
    confirmPass.parentElement.classList.add("error-message");
    confirmPass.parentElement.classList.remove("success-message");
    errorSpans[4].style.display = "block";
  } else {
    // console.log("Invalid confirmPass");
    confirmPass.parentElement.classList.add("error-message");
    confirmPass.parentElement.classList.remove("success-message");
    errorSpans[4].style.display = "block";
  }
};
// terms validation
terms.oninput = () => {
  if (terms.checked) {
    errorSpans[5].style.display = "none";
  } else {
    errorSpans[5].style.display = "block";
  }
};
document.querySelector("input[type='submit']").onclick = (e) => {
  e.preventDefault();
};
