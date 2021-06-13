const navi = document.querySelector(".navigation");

const boton = document.querySelector(".boton");

function toggleMenu() {
  document
    .getElementsByClassName("navigation")[0]
    .classList.toggle("responsive");
}

let year = new Date().getFullYear();

document.querySelector("#year").textContent = year;

let fecha = new Date().toLocaleString("en-us", {
  weekday: "long",
  month: "long",
  year: "numeric",
  day: "numeric",
});

document.querySelector("#fecha").textContent = fecha;

function getNumberOfDays(start, end) {
  const date1 = new Date(start);
  const date2 = new Date(end);

  const oneDay = 1000 * 60 * 60 * 24;

  const diffInTime = date2.getTime() - date1.getTime();

  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
}

const galleryStorage = window.localStorage;

let lastVisit = new Date().toLocaleString("en", {
  dateStyle: "short",
});

let days = getNumberOfDays(galleryStorage.getItem("lastVisit"), lastVisit);

document.querySelector("#lastVisit").textContent = days;

galleryStorage.setItem("lastVisit", lastVisit);

// For rating
function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}