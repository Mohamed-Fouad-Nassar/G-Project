// // creating Articles in js with Test API [blog.json]

// // sec-body select
// let secBody = document.querySelector(".container .sec-body");

// // get Data function
// async function useAPI(apiLink) {
//   try {
//     // fetch api
//     let response = await fetch(apiLink);
//     // get data
//     let data = await response.json();
//     // loop on elements
//     for (let i = 0; i < data.length; i++) {
//       // create article box
//       let article = document.createElement("article");
//       article.classList.add("box");
//       // create image div
//       let imageDiv = document.createElement("div");
//       imageDiv.classList.add("image");
//       // image
//       let image = document.createElement("img");
//       image.setAttribute("src", `${data[i].imgSrc}`);
//       image.setAttribute("alt", `${data[i].imgAlt}`);
//       // append image to image div
//       imageDiv.appendChild(image);
//       // create text div
//       let textDiv = document.createElement("div");
//       textDiv.classList.add("text");
//       // create link
//       let titleLink = document.createElement("a");
//       titleLink.setAttribute("href", `${data[i].articleLink}`);
//       // create title heading
//       let title = document.createElement("h3");
//       title.innerText = `${data[i].title}`;
//       titleLink.appendChild(title);
//       // create paragraph
//       let para = document.createElement("p");
//       para.innerText = `${data[i].content}`;
//       // create info div
//       let infoDiv = document.createElement("div");
//       infoDiv.classList.add("info");
//       // create author spans
//       let firstSpan = document.createElement("span");
//       firstSpan.innerText = "author: ";
//       let secondSpan = document.createElement("span");
//       secondSpan.classList.add("input");
//       secondSpan.setAttribute("id", "input");
//       secondSpan.innerText = `${data[i].author}`;
//       // append spans in info div
//       infoDiv.appendChild(firstSpan);
//       infoDiv.appendChild(secondSpan);
//       // append element in text div
//       textDiv.appendChild(titleLink);
//       textDiv.appendChild(para);
//       textDiv.appendChild(infoDiv);
//       // append divs in article box
//       article.appendChild(imageDiv);
//       article.appendChild(textDiv);
//       // append article in sec-body div
//       secBody.appendChild(article);
//     }
//   } catch (error) {
//     console.log(Error(error));
//   }
// }
// // calling function
// useAPI("../Test APIs/blog.json");
//////////////////////////////////////////////////////////////////////////////////////

// creating Articles in js with Test API [blog.json]  // Test

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
    titleLink.setAttribute("href", `${array[i].articleLink}`);
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

// get Data function
async function useAPI(apiLink, startIndex, stopIndex) {
  try {
    // fetch api
    let response = await fetch(apiLink);
    // get data
    let data = await response.json();
    if (stopIndex <= data.length) {
      loopOnData(data, startIndex, stopIndex);
      if (stopIndex === data.length) {
        secFoot.style.display = "none";
      }
    } else {
      secFoot.style.display = "none";
    }
  } catch (error) {
    console.log(Error(error));
  }
}

// Variables
let start = 0;
let startNum = 6;
let StopNum = startNum + 3;

// calling function
useAPI("../Test APIs/blog.json", start, startNum);

// see More Button
seeMoreBtn.addEventListener("click", function () {
  useAPI("../Test APIs/blog.json", startNum, StopNum);
  startNum += 3;
  StopNum = startNum + 3;
});

//////////////////////////////////////////////////////////////////////////////////////

// // creating articles in js with out API
// // sec-body select
// let secBody = document.querySelector(".container .sec-body");

// // create article box
// let article = document.createElement("article");
// article.classList.add("box");

// // create image div
// let imageDiv = document.createElement("div");
// imageDiv.classList.add("image");
// // image
// let image = document.createElement("img");
// image.setAttribute("src", "../Data/Images/pexels-pavel-danilyuk-8442105.jpg");
// image.setAttribute("alt", "article-image");
// // append image to image div
// imageDiv.appendChild(image);

// // create text div
// let textDiv = document.createElement("div");
// textDiv.classList.add("text");
// // create link
// let titleLink = document.createElement("a");
// titleLink.setAttribute("href", "#");
// // create title heading
// let title = document.createElement("h3");
// title.innerText = "article title";
// titleLink.appendChild(title);
// // create paragraph
// let para = document.createElement("p");
// para.innerText =
//   " Lorem ipsum dolor, sit amet consectetur adipisicing elit. At impedit laboriosam enim facilis.";
// // create info div
// let infoDiv = document.createElement("div");
// infoDiv.classList.add("info");
// // create author spans
// let firstSpan = document.createElement("span");
// firstSpan.innerText = "author: ";
// let secondSpan = document.createElement("span");
// secondSpan.classList.add("input");
// secondSpan.setAttribute("id", "input");
// secondSpan.innerText = "john doe";
// // append spans in info div
// infoDiv.appendChild(firstSpan);
// infoDiv.appendChild(secondSpan);

// // append element in text div
// textDiv.appendChild(titleLink);
// textDiv.appendChild(para);
// textDiv.appendChild(infoDiv);

// // append divs in article box
// article.appendChild(imageDiv);
// article.appendChild(textDiv);

// console.log(article);

// // append article in sec-body div
// // secBody.appendChild(article);
