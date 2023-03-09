// creating Articles in js with Test API [blog.json]

// sec-body select
let secBody = document.querySelector(".container .sec-body");

// see more button select
let seeMoreBtn = document.querySelector(".container .sec-foot input");

// sec-foot select
let secFoot = document.querySelector(".container .sec-foot");

// function to loop on elements
// loop on elements
function loopOnData(array, startIndex, stopIndex) {
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
    secBody.appendChild(article);
  }
}

// get links function
let getLinks = function () {
  let links = document.querySelectorAll(".article-link");
  let arr = [].slice.call(links);
  arr.forEach((e) => {
    e.addEventListener("click", function () {
      let newWindow = window.open("../HTML Files/article.html");
      newWindow.localStorage.setItem("index", e.getAttribute("index"));
    });
  });
};

// Variables
var x = 6;
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
    // calling getLinks function every call useAPI function
    getLinks();
  } catch (error) {
    console.log(Error(error));
  }
}

// Variables
let start = 0;
let startNum = 6;
let StopNum = startNum + 3;

// calling useAPI function
useAPI("../Test APIs/blog.json", start, startNum);

// see More Button
seeMoreBtn.addEventListener("click", function () {
  useAPI("../Test APIs/blog.json", startNum, StopNum);
  getLinks();
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
