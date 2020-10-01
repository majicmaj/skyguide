import { Col, Row } from 'antd';
import Text from 'antd/lib/typography/Text';
import React from 'react';
import {sunset, sunrise} from "../../CDN"

const Day = (props) => {
    if (props.weather && props.weather.periods) {
        const weather = props.weather.periods
        console.log(weather)
        const isNight = (name) => {
            return (name.toLowerCase().includes('night'))?sunset:sunrise
        }
        return<div className="Day card">
                <Row>
                    <Col span={12} className="centered">
                        <Text type="secondary" className="nomargin">{weather[0].name}</Text>
                        <h2 className="nomargin">{weather[0].temperature}</h2>
                        <img className="small" alt={weather[0].name} src={isNight(weather[0].name)}/>
                    </Col>
                    <Col span={12} className="centered">
                        <Text type="secondary" className="nomargin">{weather[1].name}</Text>
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
                        <Text type="secondary" className="nomargin">Loading...</Text>
                        <h2 className="nomargin">--°</h2>
                        <img className="small" alt="night"src={sunset}/>
                    </Col>
                    <Col span={12} className="centered">
                        <Text type="secondary" className="nomargin">Loading...</Text>
                        <h2 className="nomargin">--°</h2>
                        <img className="small" alt="morning"src={sunrise}/>
                    </Col>
            </Row>
        </div>
    }
}

export default Day