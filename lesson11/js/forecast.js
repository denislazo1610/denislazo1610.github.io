const APPIDForecast = '998a024b00b4d5372043d31a8e17db75';

var idCity = '';

const prestonIdForecast = '5604473';
const sodaSpringsForecast = '5607916';
const fishHavenForecast = '5585010';

const nombreForecast = document.querySelector('.subTitle').textContent;

if(nombreForecast == "Preston"){
  idCity = prestonIdForecast;
} else if (nombreForecast == "Soda Springs"){
  idCity = sodaSpringsForecast;
} else if (nombreForecast == "Fish Haven"){
  idCity = fishHavenForecast;
}


const apiURLForecast =
`https://api.openweathermap.org/data/2.5/forecast?id=${idCity}&appid=${APPIDForecast}&units=imperial`;
//   `https://api.openweathermap.org/data/2.5/weather?id=${idCity}&appid=${APPID}&units=imperial`;

fetch(apiURLForecast)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    // document.querySelector('.currently').textContent = jsObject.main.temp;
    // document.querySelector('.high').textContent = jsObject.main.temp_max;
    // document.querySelector('.humidity').textContent = jsObject.main.humidity;
    // document.querySelector('.wind-speed').textContent = jsObject.wind.speed;
  });

