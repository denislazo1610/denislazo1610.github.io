"use strict";

fetch("json/directory.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const businesses = jsonObject["businesses"];

    for (let i = 0; i < businesses.length; i++) {
      document
        .querySelector(".gridView")
        .addEventListener("click", function () {
          console.log("NOOO");
        });

      let card = document.createElement("section");
      let content = document.createElement("article");
      let name = document.createElement("h1");
      let summary = document.createElement("p");
      let image = document.createElement("img");
      let button = document.createElement("a");

      image.src = businesses[i].image;
      name.textContent = businesses[i].name;
      button.textContent = businesses[i].button;
      summary.textContent = businesses[i].summary;
      button.setAttribute("href", "join.html");

      card.appendChild(image);
      card.appendChild(content);
      content.appendChild(name);
      content.appendChild(summary);
      content.appendChild(button);

      document.querySelector(".business_info").appendChild(card);
    }
  });
