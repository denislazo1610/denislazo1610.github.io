// const APPID = "998a024b00b4d5372043d31a8e17db75";
const APPID = "d0fb9a57fc049f4f46ae9bff538ac131";

var idCity = "3941584";

const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${idCity}&appid=${APPID}&units=imperial`;
// `https://api.openweathermap.org/data/2.5/forecast?id=${idCity}&appid=${APPID}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.querySelector(".temperature").textContent = jsObject.main.temp;
    document.querySelector(".condition").textContent =
      jsObject.weather[0].description;
    document.querySelector(".humidity").textContent = jsObject.main.humidity;
  });
