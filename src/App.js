import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import './App.css';

import Nav from './Components/Nav'
import Card from './Container/Card'
import { API } from './Constants';

import testAstroData from './Data/testAstroData.json'
import testGeoData from './Data/testGeoData.json'

const App = () => {

  const [astroData, setAstroData] = useState({})
  const [geoData, setGeoData] = useState({})

  useEffect(()=> {
    const fetchGeo = async() => {
      // const response = await Axios.get(API.IPAPI)
      const response = {data:testGeoData}
      setGeoData(response.data)
    }
    fetchGeo();
  }, [])

  useEffect(()=> {
    const fetchAstro = async() => {
      // const response = await Axios.get(
      // `${API.ASTRO.HEAD}
      // lat=${geoData.lat}
      // &lon=-${geoData.lon}
      // ${API.ASTRO.TAIL}`
      // )
      const response = {data:testAstroData}
    setAstroData(response.data);
    }
    if (geoData.status) {
      fetchAstro();
    }
}, [geoData.status])

  return(
    <div className="App">
        <Nav geo={geoData}/>
        <Card astro={astroData}/>
    </div>
  );
}

export default App;
