// creating Articles in js with Test API [blog.json]  // Test

// sec-body select
let secBody = document.querySelector(".container .sec-body");

// see more button select
let seeMoreBtn = document.querySelector(".container .sec-foot input");

// sec-foot select
let secFoot = document.querySelector(".container .sec-foot");

// function to loop on elements
function loopOnData(array, startIndex, stopIndex) {
  // loop on elements
  for (let i = startIndex; i < stopIndex; i++) {
    // create article box
    let article = document.createElement("article");
    article.classList.add("box");

    // avatar div
    let avatarDiv = document.createElement("div");
    avatarDiv.classList.add("avatar");
    // create avatar image
    let avatarImg = document.createElement("img");
    avatarImg.setAttribute("src", `${array[i].imageUrl}`);
    avatarImg.setAttribute("alt", "hospital-image");
    // append image to avatar div
    avatarDiv.appendChild(avatarImg);

    // data div
    let dataDiv = document.createElement("div");
    dataDiv.classList.add("data");

    // head section
    let headSection = document.createElement("section");
    headSection.classList.add("head");
    // name element
    let name = document.createElement("h3");
    name.innerText = `${array[i].name}`;
    // span element
    let span = document.createElement("span");
    // span.innerText = `${array[i].}`;
    span.innerText = "test span...";
    // paragraph element
    let para = document.createElement("p");
    para.innerText = `${array[i].description}`;
    // append elements to head section
    headSection.appendChild(name);
    headSection.appendChild(span);
    headSection.appendChild(para);

    // // info section
    // let info = document.createElement("section");
    // info.classList.add("info");

    // // address field div
    // let addressField = document.createElement("div");
    // addressField.classList.add("field");
    // // icon div
    // let addressIconDiv = document.createElement("div");
    // addressIconDiv.classList.add("icon");
    // // create icon
    // let addressIcon = document.createElement("i");
    // addressIcon.classList.add("f-icon");
    // addressIcon.classList.add("fa-solid");
    // addressIcon.classList.add("fa-location-dot");
    // // append icon to icon div
    // addressIconDiv.appendChild(addressIcon);
    // // create info span
    // let addressInfoSpan = document.createElement("span");
    // addressInfoSpan.innerText = `${array[i].address}`;
    // // append elements to field div
    // addressField.appendChild(addressIconDiv);
    // addressField.appendChild(addressInfoSpan);

    // // number field div
    // let numberField = document.createElement("div");
    // numberField.classList.add("field");
    // // icon div
    // let numberIconDiv = document.createElement("div");
    // numberIconDiv.classList.add("icon");
    // // create icon
    // let numberIcon = document.createElement("i");
    // numberIcon.classList.add("f-icon");
    // numberIcon.classList.add("fa-solid");
    // numberIcon.classList.add("fa-phone");
    // // append icon to icon div
    // numberIconDiv.appendChild(numberIcon);
    // // create info span
    // let numberInfoSpan = document.createElement("span");
    // numberInfoSpan.innerText = `${array[i].phone}`;
    // // append elements to field div
    // numberField.appendChild(numberIconDiv);
    // numberField.appendChild(numberInfoSpan);

    // // mail field div
    // let mailField = document.createElement("div");
    // mailField.classList.add("field");
    // // icon div
    // let mailIconDiv = document.createElement("div");
    // mailIconDiv.classList.add("icon");
    // // create icon
    // let mailIcon = document.createElement("i");
    // mailIcon.classList.add("f-icon");
    // mailIcon.classList.add("fa-solid");
    // mailIcon.classList.add("fa-envelope");
    // // append icon to icon div
    // mailIconDiv.appendChild(mailIcon);
    // // create info span
    // let mailInfoSpan = document.createElement("span");
    // mailInfoSpan.innerText = `${array[i].mail}`;
    // // append elements to field div
    // mailField.appendChild(mailIconDiv);
    // mailField.appendChild(mailInfoSpan);

    // // append field div to info section
    // info.appendChild(addressField);
    // info.appendChild(numberField);
    // info.appendChild(mailField);

    // info section
    let info = document.createElement("section");
    info.classList.add("info");
    info.innerHTML = `
    <div class="field">
      <div class="icon">
        <i class="f-icon fa-solid fa-location-dot"></i>
      </div>
      <span>${array[i].address}</span>
    </div>
    <div class="field">
      <div class="icon">
        <i class="f-icon fa-solid fa-phone"></i>
      </div>
      <span>${array[i].phone}</span>
    </div>
    <div class="field">
      <div class="icon">
        <i class="f-icon fa-solid fa-envelope"></i>
      </div>
      <span class="mail">${array[i].mail}</span>
    </div>
    `;

    // contact div
    let contact = document.createElement("div");
    contact.classList.add("contact");
    contact.innerHTML = `
    <div>
      <a href=${array[i].facebook}>
        <i class="f-icon fa-brands fa-facebook-f"></i>
      </a>
    </div>
    <div>
      <a href=${array[i].twitter}>
        <i class="f-icon fa-brands fa-twitter"></i>
      </a>
    </div>
    <div>
      <a href=${array[i].location}>
        <i class="f-icon fa-solid fa-location-dot"></i>
      </a>
    </div>
    <div>
      <a href=${array[i].whatsapp}>
        <i class="f-icon fa-brands fa-whatsapp"></i>
      </a>
    </div>
    <div>
      <a href=${array[i].phoneNumber}>
        <i class="f-icon fa-solid fa-phone"></i>
      </a>
    </div>
    `;

    // append elements to data div
    dataDiv.appendChild(headSection);
    dataDiv.appendChild(info);
    dataDiv.appendChild(contact);

    // append elements to article box
    article.appendChild(avatarDiv);
    article.appendChild(dataDiv);

    // append article to sec body
    secBody.appendChild(article);
  }
}
// Variables
var x = 3;
var m = 0;
// get Data function
async function useAPI(apiLink, startIndex, stopIndex) {
  try {
    // fetch api
    let response = await fetch(apiLink);
    // get data
    let data = await response.json();
    m = data.length;
    if (x - m === 1) {
      loopOnData(data, startIndex, stopIndex - 1);
      secFoot.style.display = "none";
    } else if (x - m === 2) {
      loopOnData(data, startIndex, stopIndex - 2);
      secFoot.style.display = "none";
    } else if (x - m === 3) {
      loopOnData(data, startIndex, stopIndex - 3);
      secFoot.style.display = "none";
    } else {
      loopOnData(data, startIndex, stopIndex);
      x += 3;
    }
  } catch (error) {
    console.log(Error(error));
  }
}

// Variables
let start = 0;
let startNum = 3;
let StopNum = startNum + 3;

// calling function
useAPI("../Test APIs/hospitals.json", start, startNum);

// see More Button
seeMoreBtn.addEventListener("click", function () {
  useAPI("../Test APIs/hospitals.json", startNum, StopNum);
  startNum += 3;
  StopNum = startNum + 3;
  if (x === m) {
    secFoot.style.display = "none";
  }
});

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
