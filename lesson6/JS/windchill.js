let temperatura = document.querySelector(".high").textContent;
let aireVelocidad = document.querySelector(".wind-speed").textContent;

if (temperatura <= 50 && aireVelocidad >= 3) {
  document.querySelector(".wind-chill").textContent = windchill(
    temperatura,
    aireVelocidad
  );
} else {
  console.log("Nah");
}

function windchill(t, s) {
  let respuesta =
    35.74 +
    0.6215 * t -
    35.75 * Math.pow(s, 0.16) +
    0.4275 * t * Math.pow(s, 0.16);
  return Math.round(respuesta);
}
