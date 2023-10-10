const baseUrl = "https://api.weatherapi.com/v1/current.json?key=5258acd58379457295404129231010"
export const getApi = async(city) =>{
  const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`)
  return await response.json();
}

export const getWeather = async (lat, lon) =>{
  const response = await fetch(`${baseUrl}&q=${lat},${lon}&aqi=yes`)
  return await response.json();
}

// export default getApi