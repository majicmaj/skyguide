import { Row } from 'antd'
import Text from 'antd/lib/typography/Text'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { tNum } from '../Actions'
import { version } from '../Constants'

const Footer = () => {
    const {t} = useTranslation();
    return <footer className="Footer">
    <Row justify="space-around">
    <Text type="secondary">{t('designed by')} <a href="https://www.majdtarbin.com">MT</a></Text>
    <Text type="secondary">{t('version')} {tNum(version)}</Text>
    <Text type="secondary">{t('icons by')} <a className="secondary" href="https://www.flaticon.com/authors/fjstudio" title="fjstudio">fjstudio</a></Text>
    </Row></footer>}

export default Footer
