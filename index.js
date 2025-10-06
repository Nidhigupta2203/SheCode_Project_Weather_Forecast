function showWeather(response) {
 
  let weather = document.querySelector(".current-temperature-value");
  let cityElement = document.querySelector("#current-city");
  let description = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon");

  weather.innerHTML = Math.round(response.data.temperature.current);
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="current-temperature-icon"/>`;
  cityElement.innerHTML = response.data.city;
  description.innerHTML = response.data.condition.description;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  wind.innerHTML = `${response.data.wind.speed}km/h`;
}

function searchCity(city) { 
  let apiKey = "a1fd0530969c7f1714ob23944adtd94d";
  let api = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(api).then(showWeather);
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");  
 
   searchCity(searchInputElement.value);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
currentDateELement.innerHTML = formatDate(new Date());



