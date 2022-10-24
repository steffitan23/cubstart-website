apiKey = "blablabla123fakeapikey";
geocodingUrl = "http://api.openweathermap.org/geo/1.0/direct?q=";
weatherUrl = "https://api.openweathermap.org/data/2.5/weather?";

submitButton = document.getElementById("submit");
cityName = document.getElementById("cityName");
mainWeather = document.getElementById("mainWeather");
weatherDescription = document.getElementById("weatherDescription");

submitButton.addEventListener("click", function () {
  if (cityName.value != "") {
    setWeatherDescription(cityName.value);
  }
});

async function setWeatherDescription(city) {
    let coordData = await getLatLon(city)
    const lat = coordData.lat
    const lon = coordData.lon

    let weatherData = await getWeather(lat, lon)
    
    mainWeather.innerHTML = "🐻" + weatherData.mainWeather + "🐻";
    weatherDescription.innerHTML = "✨" + weatherData.weatherDescription + "✨";
  }


async function apiCall(url) {
  let response = await fetch(url)
  let data = await response.json()
  return data
}

async function getLatLon(city) {
  let formattedUrl = geocodingUrl + city + "&appid=" + apiKey;
  let data = await apiCall(formattedUrl)
  return {
    "lat": data[0].lat,
    "lon": data[0].lon
  }
}

async function getWeather(lat, lon) {
  formattedUrl = weatherUrl + "lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
  let data = await apiCall(formattedUrl);
  return {
    "mainWeather": data.weather[0].main,
    "weatherDescription": data.weather[0].description
  }
}



