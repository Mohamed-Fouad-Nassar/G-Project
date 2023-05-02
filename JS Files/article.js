// let rightSection = document.querySelector("main .container .right");

// async function setDataToNewWindow(link, i) {
//   let article = document.createElement("article");

//   let response = await fetch(link);
//   let data = await response.json();

//   // change page title
//   document.title = `${data[i].title}`;

//   // article title
//   let articleTitle = document.createElement("h1");
//   articleTitle.innerText = `${data[i].title}`;

//   // article image
//   let imageDiv = document.createElement("div");
//   imageDiv.classList.add("image");
//   let image = document.createElement("img");
//   image.setAttribute("src", `${data[i].imgSrc}`);
//   image.setAttribute("alt", `${data[i].imgAlt}`);
//   imageDiv.appendChild(image);

//   // info span
//   let infoSpan = document.createElement("span");
//   infoSpan.classList.add("info");
//   let createDate = new Date(data[i].date).toDateString();
//   infoSpan.innerHTML = `
//     written by <span>${data[i].author}</span>, on <span>
//     ${createDate}</span>
//   `;

//   // article body
//   let articleBody = document.createElement("pre");
//   articleBody.classList.add("article-body");
//   articleBody.innerText = `${data[i].content}`;

//   // append elements to article
//   article.appendChild(articleTitle);
//   article.appendChild(imageDiv);
//   article.appendChild(infoSpan);
//   article.appendChild(articleBody);

//   // video div
//   if (embedLink(data[i].youtubeLink) === null) {
//   } else {
//     // create video div
//     let videoDiv = document.createElement("div");
//     videoDiv.classList.add("video");
//     // create iframe tag
//     let iframe = document.createElement("iframe");
//     // set the video src attr
//     iframe.setAttribute("src", embedLink(data[i].youtubeLink));
//     // set default attrs
//     iframe.setAttribute(
//       "allow",
//       "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//     );
//     iframe.setAttribute("allowfullscreen", "");
//     // append iframe to video div
//     videoDiv.appendChild(iframe);
//     article.appendChild(videoDiv);
//   }

//   // append article to right section
//   rightSection.appendChild(article);
// }

// let index = localStorage.getItem("index");
// setDataToNewWindow("../Test APIs/blog.json", index);

// function embedLink(url) {
//   const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
//   const match = url.match(regExp);
//   return match && match[2].length === 11
//     ? `https://www.youtube.com/embed/${match[2]}`
//     : null;
// }

// back button
let backBtn = document.getElementById("cancel");
backBtn.addEventListener("click", function () {
  console.log("Click");
  window.history.back();
});
