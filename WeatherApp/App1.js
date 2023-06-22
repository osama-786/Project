import React, { useState } from "react";
import Axios from "axios";
import "./App1.css";
import * as weathericons from "weather-icons-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud,faSun,faCloudSun,faCloudSunRain,faCloudRain,faCloudBolt,faSnowflake,faSmog} from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState();
  const [weather, setWeaather] = useState("");

  const fetchData = async () => {
    const key = "f93d9690014cc7c08fd9b0ed8898bcf8";
    try {
      const response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
      );
      setData(response.data);
      setWeaather(response.data.weather[0].description);
      console.log(response.data);
    } catch (err) {
      alert("Please enter a valid city name");
    }
  };
  const icon =
    weather === "few clouds" ? (
      <FontAwesomeIcon icon={faCloud} beat />
    ) : weather === "scattered clouds" ? (
      <FontAwesomeIcon icon={faCloud} beat />
    ) : weather === "overcast clouds" ? (
      <FontAwesomeIcon icon={faCloudSun} beat />
    ) : weather === "broken clouds" ? (
      <FontAwesomeIcon icon={faCloud} beat />
    ) : weather === "shower rain" ? (
      <FontAwesomeIcon icon={faCloudSunRain} beat />
    ) : weather === "rain" ? (
      <FontAwesomeIcon icon={faCloudRain} beat />
    ) : weather === "thunderstorm" ? (
      <FontAwesomeIcon icon={faCloudBolt} beat />
    ) : weather === "snow" ? (
      <FontAwesomeIcon icon={faSnowflake} beat />
    ) : weather === "mist" ? (
      <FontAwesomeIcon icon={faSmog} beat />
    ): weather === "heavy intensity rain" ? (
      <FontAwesomeIcon icon={faCloudRain} beat />
    ) : (
      <FontAwesomeIcon icon={faSun} beat style={{color: "#ffff00",}} />
    );
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  const date = new Date();
  const day = weekday[date.getDay()];
  const formatdDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",  
  });
  return (
    <div className="AppContainer" style={weather==="scattered clouds"?{backgroundImage:`url(https://e0.pxfuel.com/wallpapers/514/997/desktop-wallpaper-clouds-blue-sky-with-few-clouds-background-dark-blue-clouds.jpg)`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover'} 
            : weather==="clear sky" ?{backgroundImage:`url(https://c1.wallpaperflare.com/preview/24/65/246/sky-cloud-solo-only.jpg)`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}
            :weather==="haze" ?{backgroundImage:`url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcBIjTHD2UgSTooekdLGhrReu6tuxbNiW-XPmLDZL83UmzP0frywkgqB2iFU5E6PYzOkE&usqp=CAU)`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}
            :weather==="few clouds" ?{backgroundImage:`url(https://media.istockphoto.com/id/492866927/photo/few-little-fluffy-white-clouds-in-blue-sky.jpg?s=612x612&w=0&k=20&c=0BeCgArlnZP5ugmn4qz-gNOnGNd7wucrj1sB-CizI-Q=)`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}
            :weather==="overcast clouds" ?{backgroundImage:`url(https://images.unsplash.com/photo-1525920980995-f8a382bf42c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3ZlcmNhc3QlMjBza3l8ZW58MHx8MHx8fDA%3D&w=1000&q=80)`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}
            :weather==="broken clouds" ?{backgroundImage:`url(https://c0.wallpaperflare.com/preview/532/447/657/scattered-white-clouds.jpg)`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}
            :weather==="shower rain" ?{backgroundImage:`url(https://i.pinimg.com/originals/c9/d7/76/c9d77621fafa18b34795daebbabe9f22.jpg)`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}
            :weather==="rain" ?{backgroundImage:`url(https://w0.peakpx.com/wallpaper/314/262/HD-wallpaper-beautiful-nature-nature-rain-clouds-winter.jpg)`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}
            :weather==="thunderstorm" ?{backgroundImage:`url(https://cdn.britannica.com/57/150357-050-427E4C4F/lightning-discharge-field-cumulonimbus-cloud.jpg)`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}
            :weather==="snow" ?{backgroundImage:`url(https://www.hindustantimes.com/ht-img/img/2023/05/08/1600x900/Snow-covered-mountains-in-Lahaul---Spiti---PTI-_1683570954203.jpg)`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}
            :weather==="mist" ?{backgroundImage:`url(https://images.photowall.com/products/60823/morning-mist-2.jpg)`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}
            :weather==="heavy intensity rain" ?{backgroundImage:`url(https://assets.thehansindia.com/h-upload/2021/07/14/1088351-rain.webp)`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}:
            {backgroundImage:`url(https://wallpapercave.com/wp/wp4531341.jpg)`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
      <div className="inputs">
        <input type="text"className="search"onChange={(e) => setCity(e.target.value)}placeholder="Enter the city name"></input>
        <button type="button"className="btn"onClick={fetchData}>Search</button>
        </div>
            <div className="card-body">
                  <div className="weather-date-location">
                    <h3>{day}</h3>
                    <p className="date">
                      <span className="weather-date">{formatdDate}</span>
                      <span className="weather-location">
                        {data && (
                          <div className="cityCountry">
                            {data.name}, {data.sys.country}
                          </div>
                        )}
                      </span>
                    </p>
                    <div className="icon">
                    <div className="switch">{icon}</div>
                      <p>
                        {data && (
                          <div className="weatherdescription">
                            {data.weather[0].description.replace(
                              /\b\w/g,
                              (match) => match.toUpperCase()
                            )}
                          </div>
                        )}
                      </p>
                      </div>
                  </div>
                  <div className="tempcontainer">
                    <div>
                      <h4>
                        <div className="MainTemp">
                          {data && (
                            <div>{(data.main.temp)}</div>
                          )}
                          <span className="symbol">&deg;</span>C
                        </div>
                      </h4>
                      <div className="temp2">
                        <div className="minTemp">
                          Min Temp :
                          {data && (
                            <div>
                              {(data.main.temp_min)}
                            </div>
                          )}
                          <span className="symbol">&deg;</span>C
                        </div>
                        <div className="maxTemp">
                          Max Temp :
                          {data && (
                            <div>
                              {(data.main.temp_max)}
                            </div>
                          )}
                          <span className="symbol">&deg;</span>C
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="details">
                    <div className="values">
                      <div className="val">
                      <weathericons.WiHumidity className="icons" />
                      <span className="des">{data && <div>{data.main.humidity} %</div>}</span>
                      </div>
                      <div>Humidity</div>
                    </div>
                    <div className="values">
                      <div className="val">
                      <weathericons.WiBarometer className="icons" />
                      <span className="des">{data && <div>{data.main.pressure} hPa</div>}</span>
                      </div>
                      <div>Pressure</div>
                    </div>
                    <div className="values">
                      <div className="val">
                      <weathericons.WiCloudyWindy className="icons" />
                      <span className="des">{data && (<div>{(data.wind.speed)} Kmph</div>)}</span>
                      </div>
                      <div>Wind Speed</div>
                    </div>
                    <div className="values">
                      <div className="val">
                      <weathericons.WiCloudyGusts className="icons" />
                      <span className="des">{data && (<div>{(data.wind.gust)} Kmph</div>)}</span>
                      </div>
                      <div>Wind Gust</div>
                    </div>
                  </div>
                  </div>
                </div>
                 );
               };
export default App;