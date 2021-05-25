const navi = document.querySelector(".navigation");

const boton = document.querySelector(".boton");

function toggleMenu() {
  document
    .getElementsByClassName("navigation")[0]
    .classList.toggle("responsive");
}

let lastUpdated = document.lastModified;

document.querySelector("#lastUpdated").textContent = lastUpdated;

let year = new Date().getFullYear();

document.querySelector("#year").textContent = year;

console.log(document.querySelector(".grid-container .forecast .first_day"));

console.log(document.querySelector(".grid-container .forecast .second_day"));

// This is going to tell what day is today
let first_day = new Date().toLocaleString("en-us", { weekday: "long" });

var tomorrow = new Date();
tomorrow.setDate(new Date().getDate() + 1);
let second_day = tomorrow.toLocaleString("en-us", { weekday: "long" });

console.log(date);
console.log(second_day);
