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
      document.querySelector(".contentDirectory").style.gridTemplateColumns =
        "1fr 1fr 1fr";

      let directories = document.querySelector(".contentDirectory");
      directories.style.width = "100%";
      while (directories.firstChild) {
        directories.removeChild(directories.firstChild);
      }

      for (let i = 0; i < businesses.length; i++) {
        let card = document.createElement("division");
        card.style.display = "grid";
        card.style.border = "solid";
        card.style.gridTemplateRows = "10% 30% 30% 30%";
        card.style.gridTemplateColumns = "1fr";
        card.style.backgroundColor = "bisque";

        let name = document.createElement("h1");
        let contact = document.createElement("p");
        let logo = document.createElement("img");
        let link = document.createElement("a");

        logo.src = businesses[i].logo;
        logo.style.width = "150px";
        logo.style.height = "150px";
        logo.style.margin = "0 auto";
        name.textContent = businesses[i].name;
        link.textContent = "link";
        link.href = businesses[i].link;
        contact.textContent = businesses[i].contact;

        card.appendChild(name);
        name.style.gridRow = "2";
        name.style.textAlign = "center";
        card.appendChild(contact);
        contact.style.textAlign = "center";
        card.appendChild(logo);
        logo.style.gridRow = "3";
        card.appendChild(link);

        document.querySelector(".contentDirectory").appendChild(card);
      }
    });

    document.querySelector(".listView").addEventListener("click", function () {
      console.log("list");

      document.querySelector(".contentDirectory").style.display = "grid";
      document.querySelector(".contentDirectory").style.gridTemplateColumns =
        "1fr";

      let directories = document.querySelector(".contentDirectory");
      directories.style.width = "500px";
      directories.style.margin = "0 auto";
      while (directories.firstChild) {
        directories.removeChild(directories.firstChild);
      }

      for (let i = 0; i < businesses.length; i++) {
        let card = document.createElement("division");
        card.style.display = "grid";
        card.style.border = "solid";
        card.style.gridTemplateRows = "10% 30% 30% 30%";
        card.style.gridTemplateColumns = "1fr";
        card.style.backgroundColor = "bisque";

        let name = document.createElement("h1");
        let contact = document.createElement("p");
        let logo = document.createElement("img");
        let link = document.createElement("a");

        logo.src = businesses[i].logo;
        logo.style.width = "150px";
        logo.style.height = "150px";
        logo.style.margin = "0 auto";
        name.textContent = businesses[i].name;
        link.textContent = "link";
        link.href = businesses[i].link;
        contact.textContent = businesses[i].contact;
        // button.setAttribute("href", "join.html");

        card.appendChild(name);
        name.style.gridRow = "2";
        name.style.textAlign = "center";
        card.appendChild(contact);
        contact.style.textAlign = "center";
        card.appendChild(logo);
        logo.style.gridRow = "3";
        card.appendChild(link);

        document.querySelector(".contentDirectory").appendChild(card);
      }
    });
  });
