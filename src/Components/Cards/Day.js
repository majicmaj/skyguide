import { Col, Row } from 'antd';
import React from 'react';
import {sunset, sunrise} from "../../CDN"

const Day = (props) => {
    if (props.weather && props.weather.properties) {
        const weather = props.weather.properties.periods
        const isNight = (name) => {
            return (name.toLowerCase().includes('night'))?sunset:sunrise
        }
        return<div className="Day card">
                <Row>
                    <Col span={12} className="centered">
                        <strong className="nomargin">{weather[0].name}</strong>
                        <h2 className="nomargin">{weather[0].temperature}</h2>
                        <img className="small" alt={weather[0].name} src={isNight(weather[0].name)}/>
                    </Col>
                    <Col span={12} className="centered">
                        <strong className="nomargin">{weather[1].name}</strong>
                        <h2 className="nomargin">{weather[1].temperature}</h2>
                        <img className="small" alt={weather[1].name} src={isNight(weather[1].name)}/>
                    </Col>
                </Row>
            </div>
    }
    else {
        return<div className="Day card">
            <Row justify="space-between">
                    <Col span={12} className="centered">
                        <p className="nomargin"></p>
                        <h2 className="nomargin">--°</h2>
                        <img className="small" alt="night"src={sunset}/>
                    </Col>
                    <Col span={12} className="centered">
                        <p className="nomargin"></p>
                        <h2 className="nomargin">--°</h2>
                        <img className="small" alt="morning"src={sunrise}/>
                    </Col>
            </Row>
        </div>
    }
}

export default Day