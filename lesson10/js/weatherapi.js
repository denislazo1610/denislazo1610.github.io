const apiURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=998a024b00b4d5372043d31a8e17db75";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });
