import { Row } from 'antd'
import Text from 'antd/lib/typography/Text'
import React from 'react'

const Footer = () => <footer className="Footer">
    <Row justify="space-around">
    <Text type="secondary">Designed by <a href="https://www.majdtarbin.com">MT</a></Text>
    <Text type="secondary">Icons by <a className="secondary" href="https://www.flaticon.com/authors/fjstudio" title="fjstudio">fjstudio</a></Text>
    </Row></footer>

export default Footer
