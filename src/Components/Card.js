import React from 'react'
import { useWeather } from './WeatherData'

function Card() {
  const weather = useWeather()
  console.log(weather)
  return (
    <div className='mycard'>
        <img src={weather?.data?.current?.condition?.icon ||'http://cdn.weatherapi.com/weather/64x64/night/143.png'} alt="cloud" />
        <h2>{weather?.data?.current?.temp_c || 0} &deg;C</h2>
        <h5>{weather?.data?.location?.name || ''}{weather.data ? ",": ""} {weather?.data?.location?.region ||''}</h5>
    </div>
  )
}

export default Card