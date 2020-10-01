import { Col, Row } from 'antd';
import Text from 'antd/lib/typography/Text';
import React from 'react';
import { getIcon } from '../../Actions';
import cloudy from '../../CDN/cloudy.png'
const Now = (props) => {
    if (props.hourly && props.hourly.periods) {
        const hourly = props.hourly.periods[0]
        return<div className="Now card">
                <Row justify="space-between">
                    <Col className="left" span={12}>
                        <h1>{hourly.temperature}°</h1>
                        <Text type="secondary" className="description">{hourly.shortForecast}</Text>
                    </Col>
                    <Col span={12} className="centered">
                        <img className="medium" alt={hourly.shortForecast} src={getIcon(hourly.shortForecast, )}/>
                    </Col>
                </Row>
            </div>
    }
    else {
        return<div className="Now card">
        <Row justify="space-between">
            <Col className="left" span={12}>
                <h1>--°</h1>
                        <Text type="secondary" className="description">Loading...</Text>
            </Col>
                    <Col span={12} className="centered">
                        <img className="medium" alt="cloudy" src={cloudy}/>
                    </Col>
        </Row></div>
    }
}

export default Now;