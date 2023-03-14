// global variable
// sec-foot select
let secFoot = document.querySelector(".container .sec-foot");

// -----------------------------------------------------------------------------
// pharmacy API:-
// function to loop on elements
function pharmacyLoopOnData(array, startIndex, stopIndex, parent) {
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
    parent.appendChild(article);
  }
}
// Variables
var x = 3;
var m = 0;
// get Data function
async function pharmaciesAPI(apiLink, startIndex, stopIndex, parent) {
  try {
    // fetch api
    let response = await fetch(apiLink);
    // get data
    let data = await response.json();
    m = data.length;
    if (x - m === 1) {
      pharmacyLoopOnData(data, startIndex, stopIndex - 1, parent);
      secFoot.style.display = "none";
    } else if (x - m === 2) {
      pharmacyLoopOnData(data, startIndex, stopIndex - 2, parent);
      secFoot.style.display = "none";
    } else if (x - m === 3) {
      pharmacyLoopOnData(data, startIndex, stopIndex - 3, parent);
      secFoot.style.display = "none";
    } else {
      pharmacyLoopOnData(data, startIndex, stopIndex, parent);
      x += 3;
    }
  } catch (error) {
    console.log(Error(error));
  }
}
// export elements
export { pharmaciesAPI };

// -----------------------------------------------------------------------------
// Blog API
// function to loop on elements
function blogLoopOnData(array, startIndex, stopIndex, parent) {
  // loop on elements
  for (let i = startIndex; i < stopIndex; i++) {
    // create article box
    let article = document.createElement("article");
    article.classList.add("box");
    // create image div
    let imageDiv = document.createElement("div");
    imageDiv.classList.add("image");
    // image
    let image = document.createElement("img");
    image.setAttribute("src", `${array[i].imgSrc}`);
    image.setAttribute("alt", `${array[i].imgAlt}`);
    // append image to image div
    imageDiv.appendChild(image);
    // create text div
    let textDiv = document.createElement("div");
    textDiv.classList.add("text");
    // create link
    let titleLink = document.createElement("a");
    titleLink.classList.add("article-link");
    titleLink.setAttribute("href", `${array[i].articleLink}`);
    titleLink.setAttribute("index", `${i}`);
    // create title heading
    let title = document.createElement("h3");
    title.innerText = `${array[i].title}`;
    titleLink.appendChild(title);
    // create paragraph
    let para = document.createElement("p");
    para.innerText = `${array[i].content}`;
    // create info div
    let infoDiv = document.createElement("div");
    infoDiv.classList.add("info");
    // create author spans
    let firstSpan = document.createElement("span");
    firstSpan.innerText = "author: ";
    let secondSpan = document.createElement("span");
    secondSpan.classList.add("input");
    secondSpan.setAttribute("id", "input");
    secondSpan.innerText = `${array[i].author}`;
    // append spans in info div
    infoDiv.appendChild(firstSpan);
    infoDiv.appendChild(secondSpan);
    // append element in text div
    textDiv.appendChild(titleLink);
    textDiv.appendChild(para);
    textDiv.appendChild(infoDiv);
    // append divs in article box
    article.appendChild(imageDiv);
    article.appendChild(textDiv);
    // append article in sec-body div
    parent.appendChild(article);
  }
}
// Variables
var x = 6;
var m = 0;
// get Links Function
let getLinks = function () {
  let links = document.querySelectorAll(".article-link");
  let arr = [].slice.call(links);
  arr.forEach((e) => {
    e.addEventListener("click", function () {
      let newWindow = window.open("../HTML Files/article.html", "_self");
      newWindow.localStorage.setItem("index", e.getAttribute("index"));
    });
    e.addEventListener("mouseup", function (el) {
      if (el.button === 1) {
        let newWindow = window.open("../HTML Files/article.html");
        newWindow.localStorage.setItem("index", e.getAttribute("index"));
      }
    });
  });
};
// get Data function
async function blogAPI(apiLink, startIndex, stopIndex, parent) {
  try {
    // fetch api
    let response = await fetch(apiLink);
    // get data
    let data = await response.json();
    m = data.length;
    if (x - m === 1) {
      blogLoopOnData(data, startIndex, stopIndex - 1, parent);
      secFoot.style.display = "none";
    } else if (x - m === 2) {
      blogLoopOnData(data, startIndex, stopIndex - 2, parent);
      secFoot.style.display = "none";
    } else if (x - m === 3) {
      blogLoopOnData(data, startIndex, stopIndex - 3, parent);
      secFoot.style.display = "none";
    } else {
      blogLoopOnData(data, startIndex, stopIndex, parent);
      x += 3;
    }
    // calling getLinks function every call useAPI function
    getLinks();
  } catch (error) {
    console.log(Error(error));
  }
}
// export elements
export { blogAPI };
// -----------------------------------------------------------------------------
