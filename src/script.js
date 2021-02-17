function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var ampm = hours + ":" + minutes + " " + ampm;
  return ampm;
}

function showAllWeather(response) {
  console.log(response);
  let cityName = document.querySelector("#city");
  let temperature = document.querySelector("#temperature");
  let weather = document.querySelector("#weather");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let icon = document.querySelector("#icon");

  fahrenheitTemperature = response.data.main.temp;

  cityName.innerHTML = response.data.name;
  temperature.innerHTML = Math.round(fahrenheitTemperature);
  weather.innerHTML = response.data.weather[0].description;
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
  wind.innerHTML = `Wind: ${response.data.main.humidity}mph`;
  icon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );

  dayAndTime.innerHTML = `${day} ${formatAMPM(new Date())}`;
}

function search(inputCity) {
  let apiKey = "4d45dfce26ce2dcefa1ba2028fecfb40";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=${units}&appid=${apiKey}`;

  axios.get(apiUrl).then(showAllWeather);
}

function updateCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#inputCity").value;
  search(inputCity);
}

let searchBar = document.querySelector("form");
searchBar.addEventListener("submit", updateCity);

//current location

function currentPositionSearch(position) {
  console.log(position.coords.latitude);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "4d45dfce26ce2dcefa1ba2028fecfb40";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showAllWeather);
}
navigator.geolocation.getCurrentPosition(currentPositionSearch);

let currentLocationButton = document.querySelector("#current-location");
currentLocationButton.addEventListener("click", currentPositionSearch);

//Date and Time variables

let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let dayAndTime = document.querySelector("h2");

//Form variables

dayAndTime.innerHTML = `${day} ${formatAMPM(new Date())}`;

//change to celcius

function changeToC(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  fahrenheitLink.classList.remove("active");
  celciusLink.classList.add("active");
  let celciusTemperature = Math.round(((fahrenheitTemperature - 32) * 5) / 9);
  temperatureElement.innerHTML = celciusTemperature;
}

function changeToF(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  fahrenheitLink.classList.add("active");
  celciusLink.classList.remove("active");

  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

let fahrenheitTemperature = null;

let celciusLink = document.querySelector("#celcius");
celciusLink.addEventListener("click", changeToC);

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", changeToF);
