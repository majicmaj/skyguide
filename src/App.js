import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import './App.less';

import Nav from './Components/Nav'
import Main from './Container/Main'
import Footer from './Container/Footer'

import { NAVIGATOR, ENV, LAMBDA } from './Constants';


import testAstroData from './Data/testAstroData.json'
import testGeoData from './Data/testGeoData.json'
import testForecastData from './Data/testForecastData.json'
import testForecastHourlyData from './Data/testForecastHourlyData.json'
// const testAstroData = {}
// const testGeoData = {}
// const testForecastData = {}
// const testForecastHourlyData = {}

const App = () => {
  const [astroData, setAstroData] = useState({})
  const [geoData, setGeoData] = useState({})
  const [weatherData, setWeatherData] = useState({})
  const [hourlyWeatherData, setHourlyWeatherData] = useState({})
  const [grid, setGrid] = useState({})
  
  useEffect(()=> {
    const fetchGeo = async() => {
      const response = (process.env.NODE_ENV !== ENV.DEV)?
      await Axios.get(`${LAMBDA}?API=GEO`):
      {data:testGeoData}
      setGeoData(response.data)
    }
    const success = async(pos) => {
      const coords = ({lat: pos.coords.latitude, lon: pos.coords.longitude})
      const response = (process.env.NODE_ENV !== ENV.DEV)?
      await Axios.get(`${LAMBDA}?API=GEOCODE&lat=${coords.lat}&lon=${coords.lon}`):
      {data:{city:'Test',state:'TS'}}
      setGeoData({
        city: response.data.city,
        region: response.data.state,
        lat: coords.lat,
        lon: coords.lon
      })
    }
    const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      fetchGeo();
    }
    navigator.geolocation.getCurrentPosition(success, error, NAVIGATOR.options);
    
  }, [])

  useEffect(()=> {
    const fetchGRID = async () => {
      const response = (process.env.NODE_ENV !== ENV.DEV)?
      await Axios.get(`${LAMBDA}?API=GRID&lat=${geoData.lat}&lon=${geoData.lon}`):
      {data: {gridX:83,gridY:70}}
      setGrid(response.data)
    }
    if (geoData && geoData.lat && geoData.lon) {
      fetchGRID()
    }
  }, [geoData])

  useEffect(()=> {
    const fetchWeather = async (hourly = false) => {
      const response = (process.env.NODE_ENV !== ENV.DEV)?
      await Axios.get(`
      ${LAMBDA}?API=WEATHER&gridX=${grid.gridX}&gridY=${grid.gridY}${hourly ? "&hourly=true" : ""}`)
      : {data: (hourly ? testForecastHourlyData.properties : testForecastData.properties)}
      hourly ? setHourlyWeatherData(response.data) : setWeatherData(response.data)
    }
    if (grid && grid.gridX && grid.gridY) {
      fetchWeather();
      fetchWeather(true);
    }
    else {
      console.log(grid)
    }
  }, [grid])

  useEffect(()=> {
    const fetchAstro = async() => {
      const response = (process.env.NODE_ENV !== ENV.DEV)?
      await Axios.get(`${LAMBDA}?API=ASTRO&lat=${geoData.lat}&lon=${geoData.lon}`):
      {data:testAstroData}
      setAstroData(response.data);
    }
    if (geoData && geoData.lon && geoData.lat) {
      fetchAstro();
    }
}, [geoData, geoData.status])

  return(
    <div className="App">
        <Nav geo={geoData}/>
        <Main astro={astroData} weather={weatherData} hourly={hourlyWeatherData}/>
        <Footer/>
    </div>
  );
}

export default App;
