import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import './App.less';

import Nav from './Components/Nav'
import Main from './Container/Main'
import Footer from './Container/Footer'

import { API, ENV } from './Constants';

import testAstroData from './Data/testAstroData.json'
import testGeoData from './Data/testGeoData.json'
import testForecastData from './Data/testForecastData.json'
import testForecastHourlyData from './Data/testForecastHourlyData.json'

const App = () => {

  const [astroData, setAstroData] = useState({})
  const [geoData, setGeoData] = useState({})
  const [weatherData, setWeatherData] = useState({})
  const [hourlyWeatherData, setHourlyWeatherData] = useState({})

  useEffect(()=> {
    const fetchGeo = async() => {
      const response = (process.env.NODE_ENV === ENV.PROD)?
      await Axios.get(API.IPAPI):
      {data:testGeoData}
      
      setGeoData(response.data)
    }
    fetchGeo();
  }, [])

  useEffect(()=> {
    const fetchURLS = async () => {
      const response = await Axios.get(
        `${API.WEATHER}${geoData.lat},${geoData.lon}`
        )
      return {
        forecast: response.data.properties.forecast,
        forecastHourly: response.data.properties.forecastHourly
      }
    }
    const fetchWeather = async () => {
      const URLS = (process.env.NODE_ENV === ENV.PROD)?
      await fetchURLS():
      {}
      const hourlyResponse = (process.env.NODE_ENV === ENV.PROD)?
      await Axios.get((await URLS).forecastHourly):
      {data: testForecastHourlyData}
      const weatherResponse = (process.env.NODE_ENV === ENV.PROD)?
      await Axios.get((await URLS).forecast):
      {data: testForecastData}

      setHourlyWeatherData(hourlyResponse.data)
      setWeatherData(weatherResponse.data);
    }
    if (geoData && geoData.status) {
      fetchWeather();
    }
  }, [geoData])

  useEffect(()=> {
    const fetchAstro = async() => {
      const response = (process.env.NODE_ENV === 'production')?
      await Axios.get(`${API.ASTRO.HEAD}lat=${geoData.lat}&lon=-${geoData.lon}${API.ASTRO.TAIL}`):
      {data:testAstroData}
      setAstroData(response.data);
    }
    if (geoData && geoData.status) {
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
