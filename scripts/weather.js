const queryUrl =
  "https://api.openweathermap.org/data/2.5/forecast?lat=33.158092&lon=-117.350594&units=imperial&appid=4a21eeb6818a6efbe082b97dad0224ab";

async function apiFetch() {
  try {
    const response = await fetch(queryUrl);

    if (response.ok) {
      const weatherData = await response.json();
      displayResults(weatherData);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(weatherData) {
  const weatherContainer = document.querySelector(".weather__container");
  const weatherDetails = document.querySelector(".weather__details");

  const cityName = document.createElement("h3");
  const weatherTemperature = document.createElement("div");
  const weatherDescription = document.createElement("div");
  const weatherHumidity = document.createElement("div");
  const weatherIcon = document.createElement("img");
  const hr = document.createElement("hr");
  const today = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const tomorrow = document.createElement("p");
  const dayAfterTomorrow = document.createElement("p");
  const twoDaysLater = document.createElement("p");

  cityName.textContent = `${weatherData.city.name}`;

  weatherIcon.src = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
  weatherIcon.alt = weatherData.list[0].weather[0].description;
  weatherIcon.width = 50;
  weatherIcon.height = 50;

  weatherTemperature.innerHTML = `${weatherData.list[0].main.temp}°<sup>F</sup>`;
  weatherTemperature.classList.add("weather_temp");

  const desc = weatherData.list[0].weather[0].description;
  const words = desc.split(" ");
  const capitalizedDesc = words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
  weatherDescription.textContent = capitalizedDesc;
  weatherDescription.classList.add("weather_desc");

  weatherHumidity.textContent = `Humidity: ${weatherData.list[0].main.humidity}`;

  tomorrow.innerHTML = `${days[today.getDay() + 1]}: ${
    weatherData.list[1].main.temp
  }°<sup>F</sup>`;
  dayAfterTomorrow.innerHTML = `${days[today.getDay() + 2]}: ${
    weatherData.list[2].main.temp
  }°<sup>F</sup>`;
  twoDaysLater.innerHTML = `${days[today.getDay() + 3]}: ${
    weatherData.list[3].main.temp
  }°<sup>F</sup>`;

  weatherContainer.append(cityName, weatherIcon, weatherTemperature);

  weatherDetails.append(
    weatherDescription,
    weatherHumidity,
    tomorrow,
    dayAfterTomorrow,
    twoDaysLater
  );
}

apiFetch();
