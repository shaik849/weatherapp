import React from 'react'
import {useWeather} from './WeatherData'

function Input() {
  const weather = useWeather()
  return (
    <div>
        <input type="text" placeholder='Search Here'
        value={weather.searchCity}
        onChange={(e) => weather.setSearchCity(e.target.value)}
        ></input>
    </div>
  )
}

export default Input