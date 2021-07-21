"use strict";

fetch("json/directory.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const businesses = jsonObject["businesses"];

    document.querySelector(".gridView").addEventListener("click", function () {
      console.log("grid");

      document.querySelector(".contentDirectory").style.display = "grid";
    });

    document.querySelector(".listView").addEventListener("click", function () {
      console.log("list");
    });

    for (let i = 0; i < businesses.length; i++) {
      let card = document.createElement("section");
      let name = document.createElement("h1");
      let contact = document.createElement("p");
      let logo = document.createElement("img");
      let link = document.createElement("a");

      logo.src = businesses[i].logo;
      name.textContent = businesses[i].name;
      link.textContent = businesses[i].link;
      contact.textContent = businesses[i].contact;
      // button.setAttribute("href", "join.html");

      //   card.appendChild(image);
      //   card.appendChild(content);
      //   content.appendChild(name);
      //   content.appendChild(summary);
      //   content.appendChild(button);

      //   document.querySelector(".business_info").appendChild(card);
    }
  });
