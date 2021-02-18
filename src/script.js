//Date/Time functions

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

//Weather display functions

function showAllWeather(response) {
  console.log(response);
  let cityName = document.querySelector("#city");
  let temperature = document.querySelector("#temperature");
  let weather = document.querySelector("#weather");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let icon = document.querySelector("#icon");

  //let atmosphere = [
  // "Mist",
  // "Smoke",
  // "Haze",
  // "Fog",
  // "Dust",
  // "Sand",
  // "Ash",
  // "Squall",
  // "Tornado",
  //];

  if (response.data.weather[0].main === "Clouds") {
    document.getElementById("background").style.backgroundImage =
      "url(src/backgrounds/cloud.jpg)";
  }

  if (response.data.weather[0].main === "Clear") {
    document.getElementById("background").style.backgroundImage =
      "url(src/backgrounds/clear.jpeg)";
  }

  if (response.data.weather[0].main === "Snow") {
    document.getElementById("background").style.backgroundImage =
      "url(src/backgrounds/snow.jpeg)";
  }

  if (
    response.data.weather[0].main === "Rain" ||
    response.data.weather[0].main === "Drizzle"
  ) {
    document.getElementById("background").style.backgroundImage =
      "url(src/backgrounds/rain.jpeg)";
  }

  if (
    response.data.weather[0].main === "Mist" ||
    response.data.weather[0].main === "Smoke" ||
    response.data.weather[0].main === "Haze" ||
    response.data.weather[0].main === "Fog" ||
    response.data.weather[0].main === "Dust" ||
    response.data.weather[0].main === "Sand" ||
    response.data.weather[0].main === "Ash" ||
    response.data.weather[0].main === "Squall" ||
    response.data.weather[0].main === "Tornado"
  ) {
    document.getElementById("background").style.backgroundImage =
      "url(src/backgrounds/atmosphere.jpeg)";
  }
  if (response.data.weather[0].main === "Thunderstorm") {
    document.getElementById("background").style.backgroundImage =
      "url(src/backgrounds/thunderstorm.jpeg)";
  }

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

function showForecast(response) {
  console.log(response.data);
  let forecastElementOne = document.querySelector("#forecast-day-one");
  let forecastDayOne = response.data.list[3];
  let forecastElementTwo = document.querySelector("#forecast-day-two");
  let forecastDayTwo = response.data.list[11];
  let forecastElementThree = document.querySelector("#forecast-day-three");
  let forecastDayThree = response.data.list[19];
  let forecastElementFour = document.querySelector("#forecast-day-four");
  let forecastDayFour = response.data.list[27];
  let forecastElementFive = document.querySelector("#forecast-day-five");
  let forecastDayFive = response.data.list[35];
  let icon = document.querySelector(".forecasticon");

  forecastElementOne.innerHTML = `
  <div class="row">
    <div class="col-4">${days[now.getDay() + 1]}</div>
    <div class="col-4"> 
        <img 
        src="http://openweathermap.org/img/wn/${
          forecastDayOne.weather[0].icon
        }@2x.png"/>
       ${forecastDayOne.weather[0].main}
    </div>
    <div class="col-4">${Math.round(
      forecastDayOne.main.temp_max
    )}˚ / ${Math.round(forecastDayOne.main.temp_min)}˚</div>
  </div>`;

  forecastElementTwo.innerHTML = `
  <div class="row">
    <div class="col-4">${days[now.getDay() + 2]}</div>
    <div class="col-4">
              <img 
        src="http://openweathermap.org/img/wn/${
          forecastDayTwo.weather[0].icon
        }@2x.png"/>
 ${forecastDayTwo.weather[0].main}
    </div>
    <div class="col-4">${Math.round(
      forecastDayTwo.main.temp_max
    )}˚ / ${Math.round(forecastDayTwo.main.temp_min)}˚</div>
  </div>`;

  forecastElementThree.innerHTML = `
  <div class="row">
    <div class="col-4">${days[now.getDay() + 3]}</div>
    <div class="col-4">
              <img 
        src="http://openweathermap.org/img/wn/${
          forecastDayThree.weather[0].icon
        }@2x.png"/>
    ${forecastDayThree.weather[0].main}
    </div>
    <div class="col-4">${Math.round(
      forecastDayThree.main.temp_max
    )}˚ / ${Math.round(forecastDayThree.main.temp_min)}˚</div>
  </div>`;

  forecastElementFour.innerHTML = `
  <div class="row">
    <div class="col-4">${days[now.getDay() + 4]}</div>
    <div class="col-4">
              <img 
        src="http://openweathermap.org/img/wn/${
          forecastDayFour.weather[0].icon
        }@2x.png"/>

     ${forecastDayFour.weather[0].main}
    </div>
    <div class="col-4">${Math.round(
      forecastDayFour.main.temp_max
    )}˚ / ${Math.round(forecastDayFour.main.temp_min)}˚</div>
  </div>`;

  forecastElementFive.innerHTML = `
  <div class="row">
    <div class="col-4">${days[now.getDay() + 5]}</div>
    <div class="col-4">
              <img 
        src="http://openweathermap.org/img/wn/${
          forecastDayFive.weather[0].icon
        }@2x.png"/>

     ${forecastDayFive.weather[0].main}
    </div>
    <div class="col-4">${Math.round(
      forecastDayFive.main.temp_max
    )}˚ / ${Math.round(forecastDayFive.main.temp_min)}˚</div>
  </div>`;
}

//Search for a city functions

function search(inputCity) {
  let apiKey = "4d45dfce26ce2dcefa1ba2028fecfb40";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=${units}&appid=${apiKey}`;

  axios.get(apiUrl).then(showAllWeather);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${inputCity}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showForecast);
}

function updateCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#inputCity").value;
  search(inputCity);
}

//Change F/C functions

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

//Current location functions

function updateCurrentPosition(position) {
  console.log(position.coords.latitude);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "4d45dfce26ce2dcefa1ba2028fecfb40";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showAllWeather);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showForecast);
}

function currentPositionSearch(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(updateCurrentPosition);
}

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

let searchBar = document.querySelector("form");

//Current location variables

let currentLocationButton = document.querySelector("#current-location");

//Change F/C variables

let fahrenheitLink = document.querySelector("#fahrenheit");
let celciusLink = document.querySelector("#celcius");

//F/C event listeners

celciusLink.addEventListener("click", changeToC);
fahrenheitLink.addEventListener("click", changeToF);

//Update current location event listeners

currentLocationButton.addEventListener("click", currentPositionSearch);

//Search for a city "submit" event listener

searchBar.addEventListener("submit", updateCity);

//Update date/time event upon load

dayAndTime.innerHTML = `${day} ${formatAMPM(new Date())}`;

//Update current location upon load/reload

navigator.geolocation.getCurrentPosition(updateCurrentPosition);
