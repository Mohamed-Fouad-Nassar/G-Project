// variables
// elements
let form = document.getElementById("form"),
  articleTitle = document.getElementById("title"),
  articleAuthor = document.getElementById("author"),
  articleBody = document.getElementById("body"),
  articleVideo = document.getElementById("video"),
  articleThumbnail = document.getElementById("thumbnail"),
  submitBtn = document.getElementById("submit");
// divs
let titleDiv = document.getElementById("title-div"),
  authorDiv = document.getElementById("author-div"),
  bodyDiv = document.getElementById("body-div"),
  thumbnailDiv = document.getElementById("thumbnail-div");
// spans
let titleSpan = document.getElementById("title-error"),
  authorSpan = document.getElementById("author-error"),
  bodySpan = document.getElementById("body-error"),
  thumbnailSpan = document.getElementById("thumbnail-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  ValidateInputsAndAddData(e);
  // addElementsToMainDiv();
});

// convert any youtube link into embed link
function embedLink(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11
    ? `https://www.youtube.com/embed/${match[2]}`
    : null;
}

// function addElementsToMainDiv() {
//   // create article box
//   let article = document.createElement("article");
//   article.classList.add("box");
//   article.innerHTML = `
//   <h2>${articleTitle.value}</h2>
//   <span>${articleAuthor.value}</span>
//   <pre>${articleBody.value}</pre>
//   `;
//   if (embedLink(articleVideo.value) === null) {
//   } else {
//     article.innerHTML += `
//   <div class="video">
//     <iframe src="${embedLink(articleVideo.value)}" frameborder="0"
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//     allowfullscreen
//     ></iframe>
//   </div>
//   `;
//   }
//   // append article in content div
//   document.querySelector(".sec-body .content").appendChild(article);
// }

function ValidateInputsAndAddData(ele) {
  // title validation
  if (articleTitle.value === "") {
    ele.preventDefault();
    titleSpan.innerText = "article title can't be empty";
    titleDiv.classList.add("error");
    titleDiv.classList.remove("success");
  } else if (articleTitle.value.length <= 5) {
    ele.preventDefault();
    titleSpan.innerText = "article title must be more than 5 characters";
    titleDiv.classList.add("error");
    titleDiv.classList.remove("success");
  } else {
    titleSpan.innerHTML = "";
    titleDiv.classList.remove("error");
    titleDiv.classList.add("success");
  }

  // author validation
  if (articleAuthor.value === "") {
    ele.preventDefault();
    authorSpan.innerText = "article author can't be empty";
    authorDiv.classList.add("error");
    authorDiv.classList.remove("success");
  } else if (articleAuthor.value.length <= 3) {
    ele.preventDefault();
    authorSpan.innerText = "article author must be more than 3 characters";
    authorDiv.classList.add("error");
    authorDiv.classList.remove("success");
  } else {
    authorSpan.innerHTML = "";
    authorDiv.classList.remove("error");
    authorDiv.classList.add("success");
  }

  // body validation
  if (articleBody.value === "") {
    ele.preventDefault();
    bodySpan.innerText = "article body can't be empty";
    bodyDiv.classList.add("error");
    bodyDiv.classList.remove("success");
  } else if (articleBody.value.length <= 50) {
    ele.preventDefault();
    bodySpan.innerText = "article body must be more than 50 characters";
    bodyDiv.classList.add("error");
    bodyDiv.classList.remove("success");
  } else {
    bodySpan.innerHTML = "";
    bodyDiv.classList.remove("error");
    bodyDiv.classList.add("success");
  }

  // thumbnail validation
  if (articleThumbnail.value === "") {
    ele.preventDefault();
    thumbnailSpan.innerText = "article thumbnail can't be empty";
    thumbnailDiv.classList.add("error");
    thumbnailDiv.classList.remove("success");
  } else {
    thumbnailSpan.innerHTML = "";
    thumbnailDiv.classList.remove("error");
    thumbnailDiv.classList.add("success");
  }
}
