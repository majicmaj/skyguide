import { Col, Row } from 'antd';
import Text from 'antd/lib/typography/Text';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { getIcon, tNum } from '../../Actions';
import cloudy from '../../CDN/cloudy.png'
const Now = (props) => {
    const {t} = useTranslation();
    if (props.hourly && props.hourly.periods) {
        const hourly = props.hourly.periods[0]
        return<div className="Now card">
                <Row justify="space-between">
                    <Col className="left" span={12}>
                        <h1>{tNum(hourly.temperature)}°</h1>
                        <Text className="description">{t(hourly.shortForecast.toLowerCase())}</Text>
                    </Col>
                    <Col span={12} className="centered">
                        <img className="medium" alt={t(hourly.shortForecast.toLowerCase())} src={getIcon(hourly.shortForecast, )}/>
                    </Col>
                </Row>
            </div>
    }
    else {
        return<div className="Now card">
        <Row justify="space-between">
            <Col className="left" span={12}>
                <h1>--°</h1>
                        <Text className="description">{t('loading')}</Text>
            </Col>
                    <Col span={12} className="centered">
                        <img className="medium" alt={t('cloudy')} src={cloudy}/>
                    </Col>
        </Row></div>
    }
}

export default Now;