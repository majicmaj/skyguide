import React, { useEffect, useState } from 'react';
import { ConfigProvider } from 'antd';
import Axios from 'axios'
import ar from 'antd/es/locale/ar_EG';
import en from 'antd/es/locale/en_US';
import './App.less';

import Nav from './Components/Nav'
import Main from './Container/Main'
import Footer from './Container/Footer'

import { NAVIGATOR, ENV, LAMBDA } from './Constants';
import i18n from './i18n';

const App = () => {
  const [astroData, setAstroData] = useState({})
  const [geoData, setGeoData] = useState({})
  const [weatherData, setWeatherData] = useState({})
  const [hourlyWeatherData, setHourlyWeatherData] = useState({})
  const [grid, setGrid] = useState({})
  const [direction, setDirection] = useState("ltr")
  
  useEffect(()=> {
    const fetchGeo = async() => {
      const response = (process.env.NODE_ENV !== ENV.DEV)?
      await Axios.get(`${LAMBDA}?API=GEO`):
      {data: {city: 'Gotham', region: 'VA', lat: 39, lon: -77}}
      setGeoData(response.data)
    }
    const success = async(pos) => {
      const coords = ({lat: pos.coords.latitude, lon: pos.coords.longitude})
      const response = (process.env.NODE_ENV !== ENV.DEV)?
      await Axios.get(`${LAMBDA}?API=GEOCODE&lat=${coords.lat}&lon=${coords.lon}`):
      {data:{city:'Gotham',state:'VA'}}
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
      const testHourly = {periods: [
        {
          temperature: 61,
          shortForecast: "Isolated Rain Showers"
      },{
        temperature: 72,
        shortForecast: "Isolated Rain Showers"}]}
      const testDaily = {periods: [
        { 
          name: "Tonight",
          temperature: 61,
          shortForecast: "Isolated Rain Showers"
      },{
        name: "Tomorrow",
        temperature: 72,
        shortForecast: "Isolated Rain Showers"
      }]}
      const response = (process.env.NODE_ENV !== ENV.DEV)?
      await Axios.get(`
      ${LAMBDA}?API=WEATHER&gridX=${grid.gridX}&gridY=${grid.gridY}${hourly ? "&hourly=true" : ""}`)
      : {data: (hourly ? testHourly : testDaily)}
      hourly ? setHourlyWeatherData(response.data) : setWeatherData(response.data)
    }
    if (grid && grid.gridX && grid.gridY) {
      fetchWeather();
      fetchWeather(true);
    }
    else {
    }
  }, [grid])

  useEffect(()=> {
    const fetchAstro = async() => {
      const response = (process.env.NODE_ENV !== ENV.DEV)?
      await Axios.get(`${LAMBDA}?API=ASTRO&lat=${geoData.lat}&lon=${geoData.lon}`):
      {data:{dataseries: [
        {cloudcover: 9, seeing: 4, transparency: 8}
      ]
    }}
      setAstroData(response.data);
    }
    if (geoData && geoData.lon && geoData.lat) {
      fetchAstro();
    }
}, [geoData, geoData.status])

  const getLocale = () => {
    switch(i18n.language) {
      case 'ar':
        return ar
      case 'en':
        return en
      default:
        return en
    }
  }
  return(
    <div className="App" dir={direction}>
      <ConfigProvider direction={direction} locale={getLocale}>
        <Nav geo={geoData} setDirection={setDirection}/>
        <Main astro={astroData} weather={weatherData} hourly={hourlyWeatherData}/>
        <Footer/>
      </ConfigProvider>
    </div>
  );
}

export default App;
