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
