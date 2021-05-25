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

// This is going to tell days
var date = new Date();
let first_day = new Date().toLocaleString("en-us", { weekday: "long" });

date.setDate(new Date().getDate() + 1);
let second_day = date.toLocaleString("en-us", { weekday: "long" });

date.setDate(new Date().getDate() + 2);
let third_day = date.toLocaleString("en-us", { weekday: "long" });

date.setDate(new Date().getDate() + 3);
let fourth_day = date.toLocaleString("en-us", { weekday: "long" });

date.setDate(new Date().getDate() + 4);
let fifth_day = date.toLocaleString("en-us", { weekday: "long" });

console.log(first_day);
console.log(second_day);
console.log(third_day);
console.log(fourth_day);
console.log(fifth_day);
