import React from 'react';

import Now from '../Components/Cards/Now'
import Stats from '../Components/Cards/Stats'
import Day from '../Components/Cards/Day'
import { Col, Row } from 'antd';

const Main = (props) => {
    
    return <div className="Main">
        <Row gutter={20}>
            <Col span={24} md={12}>
            <Now weather={props.weather} hourly={props.hourly}/>
    
            </Col>
            <Col span={24} md={12}>
            <Day weather={props.weather}/>
        
            </Col>
        </Row><Stats astro={props.astro}/>
    </div>
}

export default Main