import { Col, Row } from 'antd';
import React from 'react';
import { getIcon } from '../../Actions';
import cloudy from '../../CDN/cloudy.png'
const Now = (props) => {
    if (props.hourly && props.hourly.properties) {
        const hourly = props.hourly.properties.periods[0]
        getIcon(hourly.icon)
        return<div className="Now card">
            <Row justify="space-between">
                <Col span={12}>
    <h1>{hourly.temperature}°</h1>
    <p className="description">{hourly.shortForecast}</p>
                    </Col>
                    <Col span={12} className="centered">
                        <img className="medium" src={getIcon(hourly.shortForecast)}/>
                    </Col>
            </Row></div>
    }
    else {
        return<div className="Now card">
        <Row justify="space-between">
            <Col span={12}>
                <h1>--°</h1>
                <p>Loading...</p>
            </Col>
                    <Col span={12} className="centered">
                        <img className="medium" src={cloudy}/>
                    </Col>
        </Row></div>
    }
}

export default Now;