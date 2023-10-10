
import './App.css';
import Button from './Components/Button';
import Card from './Components/Card';
import Input from './Components/Input';
import { useWeather } from './Components/WeatherData';
import { useEffect } from 'react';

function App() {
  const weather = useWeather()
   useEffect(() =>{
     weather.fetchCurrentLocation()
   }, [])
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input></Input>
      <Button value="Search" onClick={weather.getData} ></Button>
      <Card></Card>
    </div>
  );
}

export default App;
