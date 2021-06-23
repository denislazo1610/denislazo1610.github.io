"use strict";

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];

    const town = towns.filter(
      (x) =>
        x.name == "Preston" ||
        x.name == "Soda Springs" ||
        x.name == "Fish Haven"
    );

    for (let i = 0; i < town.length; i++) {
      let card = document.createElement("section");
      let content = document.createElement("article");
      let image = document.createElement("img");
      let name = document.createElement("h1");
      let motto = document.createElement("h3");
      let yearFounded = document.createElement("h1");
      let population = document.createElement("h1");
      let rainFall = document.createElement("h1");

      image.src = `images/${town[i].photo}`;
      name.textContent = town[i].name;
      motto.textContent = town[i].motto;
      yearFounded.textContent = `Year Founded: ${town[i].yearFounded}`;
      population.textContent = `Population: ${town[i].currentPopulation}`;
      rainFall.textContent = `Annual Rain Fall: ${town[i].averageRainfall}`;

      //   image.setAttribute("src", prophets[i].imageurl);

      card.appendChild(image);
      card.appendChild(content);
      content.appendChild(name);
      content.appendChild(motto);
      content.appendChild(yearFounded);
      content.appendChild(population);
      content.appendChild(rainFall);

      //   card.appendChild(image);

      document.querySelector("div.towns_info").appendChild(card);
    }
  });
