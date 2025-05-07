import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import axios from 'axios';


const App = () => {

  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const [temperature, setTemperature] = useState(null)
  const [humidity, setHumidity] = useState(null)
  const [windSpeed, setWindSpeed] = useState(null)
  const [cityName, setCityName] = useState("")
  const [weatherIcon, setWeatherIcon] = useState("01d")



  const API_KEY = "f77a76af96f90f448cb0457fe8453897";

  const fetchWeather = async () => {
    if (!search) return;
    setLoading(true)
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API_KEY}`
      );
      if (data.cod === 200) {
        setTemperature(data.main.temp);
        setHumidity(data.main.humidity);
        setWindSpeed(data.wind.speed);
        setCityName(data.name);
        setWeatherIcon(data.weather[0].icon);
      }
    } catch (error) {
      setCityName("City Not Found")
      setTemperature(null)
      setHumidity(null)
      setWindSpeed(null)
      setWeatherIcon("01d")
    }
    setLoading(false);
  };


  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-950 to to-black'>
        {/* Search bar & icon */}
        <div className='flex py-3 px-5 w-lg items-center justify-center bg-white rounded-2xl mb-6 shadow-lg'>
          <input className='flex w-screen text-black outline-none'
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch
            onClick={fetchWeather}
            className='flex justify-end text-gray-500 cursor-pointer w-20' />
        </div>
        {/* <ReactAnimatedWeather
          icon={getWeatherIcon(weatherIcon)}
          color="white"
          size={80}
          animate={true}
        /> */}

        {/* Weather Icon */}

        <img src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          alt=""
          className='w-40 h-40 mb-6'
        />

        {/* Temprature & CityName */}

        <h1 className='text-4xl font-bold'>{loading ? "loading..." : temperature !== null ? `${temperature}°C` : "--"}</h1>
        <h2 className='text-xl mt-2 mb-6 font-semibold'>{cityName || "Type to check temperature"}</h2>

        {/*Humidity & Wind Speed */}

        <div className='w-full max-w-md mt-6 flex flex-col md:flex-row items-center justify-center md:items-start gap-30'>
          <div className='flex flex-col items-center mb-6 md:mb-0'>
            <WiHumidity size="30px"
              className='text-3xl mb-2' />
            <span className='text-lg font-medium'>{humidity !== null ? `${humidity}%` : "--"}</span>
            <p className='text-sm'>Humidity</p>
          </div>
          <div className='flex flex-col items-center mb-6 md:mb-0'>
            <FaWind size="30px" className='text-3xl mb-2' />
            <span className='text-lg font-medium'>{windSpeed !== null ? `${windSpeed}km/h` : "--"}</span>
            <p className='text-sm'>Wind Speed</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
