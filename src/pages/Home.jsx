import React, { useState } from "react";
import axios from "axios";
import "../app.css";

function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({ data: "" });
  const apikey = "0d6dd11e3d3d972901a7ef0f08e90dca";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apikey}`;

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      axios.get(`${url}`)
        .then((res) => {
          setWeather({ data: res.data });
        })
        .catch((error) => {
          console.log(error);
        });
      setLocation("");
    }
  };
  console.log(weather)
  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          value={location}
          onKeyPress={handleKeyPress}
          placeholder="Enter city"
        ></input>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{weather.data.name}</p>
          </div>
          <div className="temp">
            {weather.data.main && (
              <h1 className="bold">{weather.data.main.temp.toFixed()}°C</h1>
            )}
          </div>
            <div className="description">
              {weather.data.weather && <p  className="type">{weather.data.weather[0].main}</p>}
            </div>
        </div>
        { weather.data &&
        <div className="bottom">
          <div className="feelslike">
              {weather.data.main && <p className="bold">{weather.data.main.feels_like} °C</p>}
              <p>Feels_like</p>
          </div>
           <div className="humidity">
             {weather.data.main && <p className="bold">{weather.data.main.humidity} %</p>}
             <p>Humidity</p>
           </div>
           <div className="windspeed">
             {weather.data.wind && <p className="bold">{weather.data.wind.speed} KM/H</p>}
             <p>Windspeed</p>
           </div>
        </div>
        }
      </div>
    </div>
  );
}
export default App;
