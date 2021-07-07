"use strict";

var nombreEvents = document.querySelector(".subTitle").textContent;

const apiURLEvents = `https://byui-cit230.github.io/weather/data/towndata.json`;

fetch(apiURLEvents)
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

    console.log(town[0].events.length);

    for (let i = 0; i < town.length; i++) {
      if (town[i].name == nombreEvents) {
        console.log(`this is ${nombreEvents}`);

        for (let x = 0; x < town[i].events.length; x++) {
          console.log(town[i].events[x]);
        }
      }
    }

    // for (let i = 0; i < town.length; i++) {
    //   let card = document.createElement("section");
    //   let content = document.createElement("article");
    //   let image = document.createElement("img");
    //   let name = document.createElement("h1");
    //   let motto = document.createElement("h6");
    //   let yearFounded = document.createElement("h5");
    //   let population = document.createElement("h5");
    //   let rainFall = document.createElement("h5");

    //   image.src = `images/${town[i].photo}`;
    //   name.textContent = town[i].name;
    //   motto.textContent = town[i].motto;
    //   yearFounded.textContent = `Year Founded: ${town[i].yearFounded}`;
    //   population.textContent = `Population: ${town[i].currentPopulation}`;
    //   rainFall.textContent = `Annual Rain Fall: ${town[i].averageRainfall}`;

    //   //   image.setAttribute("src", prophets[i].imageurl);

    //   card.appendChild(image);
    //   card.appendChild(content);
    //   content.appendChild(name);
    //   content.appendChild(motto);
    //   content.appendChild(yearFounded);
    //   content.appendChild(population);
    //   content.appendChild(rainFall);

    //   //   card.appendChild(image);

    //   document.querySelector("div.towns_info").appendChild(card);
    // }
  });
