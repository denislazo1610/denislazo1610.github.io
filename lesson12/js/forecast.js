// const APPID = "998a024b00b4d5372043d31a8e17db75";
const APPIDForecast = "d0fb9a57fc049f4f46ae9bff538ac131";

var idCity = "3941584";

// const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${idCity}&appid=${APPID}&units=imperial`;
const apiURLForecast = `https://api.openweathermap.org/data/2.5/forecast?id=${idCity}&appid=${APPIDForecast}&units=imperial`;

fetch(apiURLForecast)
  .then((response) => response.json())
  .then((jsObject) => {
    for (var i = 0; i < 3; i++) {
      document.querySelector(`.Cusco${i}Day`).textContent =
        jsObject.list[i].main.temp;
    }
  });
