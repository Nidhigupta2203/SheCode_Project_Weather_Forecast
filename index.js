function showWeather(response) {
 let weather = document.querySelector(".current-temperature-value");
 let cityElement = document.querySelector("#current-city");
 let description = document.querySelector("#description");
 let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon");
  let currentDateElement = document.querySelector("#current-date");

  weather.innerHTML = Math.round(response.data.temperature.current);
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="current-temperature-icon"/>`;
   currentDateElement.innerHTML = formatDate(new Date());
 cityElement.innerHTML = response.data.city;
 description.innerHTML = response.data.condition.description;
 humidity.innerHTML = `${response.data.temperature.humidity}%`;
  wind.innerHTML = `${response.data.wind.speed}km/h`;

  forecastContainer(response.data.city);
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

function forecastContainer(city) {
  let apiKey="a1fd0530969c7f1714ob23944adtd94d";
  let api = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(api).then(DisplayForecast);
}

function DisplayDate(day) {
   let days = [
     "Sun",
     "Mon",
     "Tue",
     "Wed",
     "Thu",
     "Fri",
     "Sat",
  ];
  return days[day.getDay()];
}

function DisplayForecast(response) {

  let forecast = "";
  response.data.daily.forEach(function (Day, index) {
    if (index < 5) {
      forecast += `
      <div class="forecast-day-container">
          <div class="forecast-day">${DisplayDate(new Date(Day.time * 1000))}</div>
            <div class="forecast-icon"><img src="${Day.condition.icon_url}" class="forecast-icon"/></div>
          <div class="forecast-temperatures">
            <div class="temperature"><strong>${Math.round(Day.temperature.minimum)}°</strong></div>
            <div class="temperature">${Math.round(Day.temperature.maximum)}°</div>
          </div>
        </div>  
    `;
    }
  });

  let forecastElement = document.querySelector("#forecast-container");
  forecastElement.innerHTML = forecast;
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

searchCity("Delhi");






