# Weather Forecast Web App

A simple weather forecast web application that shows real‑time weather information for any city using a public weather API.  
Built as part of the SheCode program to practice JavaScript, APIs and frontend design.


## Overview

This project allows users to:

- Search for a city.
- View current temperature, humidity and weather condition.
- See error messages when an invalid city is entered or the API fails.

The focus is on understanding API calls, DOM manipulation and building a clean, responsive UI.


## API

The app uses a public weather API (such as OpenWeatherMap) which provides:

- City name and country  
- Temperature and feels‑like temperature  
- Humidity and pressure  
- Weather description and icon (e.g. clear sky, rain)
  

## Installation

```bash
git clone https://github.com/Nidhigupta2203/SheCode_Project_Weather_Forecast.git
cd SheCode_Project_Weather_Forecast
```


## Features

- Search weather by city name  
- Displays temperature, weather condition, humidity, and wind speed  
- Fetches real-time weather data using an API  
- Responsive design for mobile and desktop  
- Clean and user-friendly interface

## Tech Stack

- HTML5  
- CSS3  
- JavaScript (ES6)  
- Weather API
  

## Usage

No backend is required; everything runs in the browser.

- Open index.html in your browser (or use Live Server in VS Code).
- Enter a city name in the search bar.
- View the current weather details for that city.

If the API needs a key:
- Create an API key on the provider site.
- Put your key in the JavaScript file where the request URL is defined.


## Key Functions

getWeatherData(city): Fetches weather data for the given city.

updateUI(data): Updates the page with weather details.

showError(message): Shows error messages for invalid input or API failure.

## Future Enhancements

- 5‑day forecast.
- Geolocation (“Use my location”).
- Dark/light mode and improved styling.
