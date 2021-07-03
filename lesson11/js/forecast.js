const APPID = '998a024b00b4d5372043d31a8e17db75';

var idCity = '';

const prestonId = '5604473';
const sodaSprings = '5607916';
const fishHaven = '5585010';

const nombre = document.querySelector('.subTitle').textContent;

if(nombre == "Preston"){
  idCity = prestonId;
} else if (nombre == "Soda Springs"){
  idCity = sodaSprings;
} else if (nombre == "Fish Haven"){
  idCity = fishHaven;
}


const apiURL =
`https://api.openweathermap.org/data/2.5/forecast?id=${idCity}&appid=${APPID}&units=imperial`;
//   `https://api.openweathermap.org/data/2.5/weather?id=${idCity}&appid=${APPID}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    // document.querySelector('.currently').textContent = jsObject.main.temp;
    // document.querySelector('.high').textContent = jsObject.main.temp_max;
    // document.querySelector('.humidity').textContent = jsObject.main.humidity;
    // document.querySelector('.wind-speed').textContent = jsObject.wind.speed;
  });

