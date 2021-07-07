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
          let sentence = document.createElement("p");
          sentence.textContent = town[i].events[x];

          document.querySelector(".dates").appendChild(sentence);
          console.log(town[i].events[x]);
        }
      }
    }
  });
