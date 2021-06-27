const idCity = '5604473';
const APPID = '998a024b00b4d5372043d31a8e17db75';

const apiURL =
  `https://api.openweathermap.org/data/2.5/weather?id=${idCity}&appid=${APPID}&units=imperial`;
  // `https://api.openweathermap.org/data/2.5/forecast?id=${idCity}&appid=${APPID}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('.currently').textContent = jsObject.main.temp;
    document.querySelector('.high').textContent = jsObject.main.temp_max;
    document.querySelector('.humidity').textContent = jsObject.main.humidity;
    document.querySelector('.wind-speed').textContent = jsObject.wind.speed;
//     const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
// const desc = jsObject.weather[0].description;  // note how we reference the weather array
// document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
// document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
// document.getElementById('icon').setAttribute('alt', desc);
  });