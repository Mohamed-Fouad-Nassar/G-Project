let errorSpans = document.getElementsByClassName("error");

let pass = document.getElementById("pass-field");
let mail = document.getElementById("mail-field");

mail.oninput = () => {
  if (mail.value.match("mohammednassar750@gmail.com")) {
    // console.log("Valid mail");
    mail.parentElement.classList.add("success-message");
    mail.parentElement.classList.remove("error-message");
    errorSpans[0].style.display = "none";
  } else if (mail.value === "") {
    // console.log("Invalid mail");
    mail.parentElement.classList.add("error-message");
    mail.parentElement.classList.remove("success-message");
    errorSpans[0].style.display = "block";
  } else {
    // console.log("Invalid mail");
    mail.parentElement.classList.add("error-message");
    mail.parentElement.classList.remove("success-message");
    errorSpans[0].style.display = "block";
  }
};
pass.oninput = () => {
  if (pass.value.match("11111111")) {
    // console.log("Valid pass");
    pass.parentElement.classList.add("success-message");
    pass.parentElement.classList.remove("error-message");
    errorSpans[1].style.display = "none";
  } else if (
    pass.value === "" ||
    pass.value.length < 8 ||
    pass.value.length > 100
  ) {
    // console.log("Invalid pass");
    pass.parentElement.classList.add("error-message");
    pass.parentElement.classList.remove("success-message");
    errorSpans[1].style.display = "block";
  } else {
    // console.log("Invalid pass");
    pass.parentElement.classList.add("error-message");
    pass.parentElement.classList.remove("success-message");
    errorSpans[1].style.display = "block";
  }
};
document.querySelector("input[type='submit']").onclick = (e) => {
  e.preventDefault();
};
