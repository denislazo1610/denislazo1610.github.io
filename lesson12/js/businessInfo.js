"use strict";

// const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch("json/info.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const businesses = jsonObject["businesses"];

    // const town = towns.filter(
    //   (x) =>
    //     x.name == "Preston" ||
    //     x.name == "Soda Springs" ||
    //     x.name == "Fish Haven"
    // );

    for (let i = 0; i < businesses.length; i++) {
      let card = document.createElement("section");
      let content = document.createElement("article");
      let name = document.createElement("h1");
      let summary = document.createElement("p");
      let image = document.createElement("img");
      let button = document.createElement("button");

      image.src = businesses[i].image;
      name.textContent = businesses[i].name;
      button.textContent = businesses[i].button;
      summary.textContent = businesses[i].summary;

      card.appendChild(image);
      card.appendChild(content);
      content.appendChild(name);
      content.appendChild(summary);
      content.appendChild(button);

      document.querySelector(".business_info").appendChild(card);
    }
  });
