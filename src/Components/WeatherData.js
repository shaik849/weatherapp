import React, { createContext, useContext, useState } from 'react'
import {getApi,getWeather} from '../api/api'


const WeatherContext = createContext(null)
export const useWeather = () =>{
    return useContext(WeatherContext)
}

export function WeatherProvider(props) {
   const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState(null);

// console.log(searchCity)
  const getData = async() =>{
    const data = await getApi(searchCity)
    setData(data)
  }


const fetchCurrentLocation = async() =>{
  navigator.geolocation.getCurrentPosition((position) =>{
    getWeather(position.coords.latitude, position.coords.longitude).then((data) => setData(data))
  })
}

    return (
    <div>
       <WeatherContext.Provider value = {{data, searchCity, setSearchCity, getData, setData, fetchCurrentLocation}}>
         {props.children}
       </WeatherContext.Provider>
    </div>
  )
}

// export default WeatherData