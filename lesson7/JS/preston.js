const navi = document.querySelector(".navigation");

const boton = document.querySelector(".boton");

function toggleMenu() {
  document
    .getElementsByClassName("navigation")[0]
    .classList.toggle("responsive");
}

let year = new Date().getFullYear();

document.querySelector("#year").textContent = year;

// This is going to tell days
var date = new Date();
let first_day = new Date().toLocaleString("en-us", { weekday: "long" });
document.querySelector(".grid-container .forecast .first_day").textContent =
  first_day;

date.setDate(new Date().getDate() + 1);
let second_day = date.toLocaleString("en-us", { weekday: "long" });
document.querySelector(".grid-container .forecast .second_day").textContent =
  second_day;

date.setDate(new Date().getDate() + 2);
let third_day = date.toLocaleString("en-us", { weekday: "long" });
document.querySelector(".grid-container .forecast .third_day").textContent =
  third_day;

date.setDate(new Date().getDate() + 3);
let fourth_day = date.toLocaleString("en-us", { weekday: "long" });
document.querySelector(".grid-container .forecast .fourth_day").textContent =
  fourth_day;

date.setDate(new Date().getDate() + 4);
let fifth_day = date.toLocaleString("en-us", { weekday: "long" });
document.querySelector(".grid-container .forecast .fifth_day").textContent =
  fifth_day;

if (first_day == "Friday") {
  var oracion =
    "Saturday = Preston Pancakes in the Park! 9:00 a.m. Friday at the city park.";
  document.querySelector(".advertencia").textContent = oracion;
  document.querySelector(".advertencia").style.textAlign = "center";
  document.querySelector(".advertencia").style.backgroundColor = "Yellow";
}

let fecha = new Date().toLocaleString("en-us", {
  weekday: "long",
  month: "long",
  year: "numeric",
  day: "numeric",
});

document.querySelector("#fecha").textContent = fecha;
