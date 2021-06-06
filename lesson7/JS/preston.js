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
