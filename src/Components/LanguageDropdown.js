import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const LanguageDropdown = (props) => {
    const menu = <Menu>
        <Menu.Item onClick={()=> {
                props.setLang('en')
                props.setDirection('ltr')
            }}>
            English
        </Menu.Item>
        <Menu.Item onClick={()=> {
                props.setLang('ar')
                props.setDirection('rtl')
        }}>
            العربية
        </Menu.Item>
    </Menu>

    return <Dropdown overlay={menu} >
        <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <i className="fas fa-globe"/> <DownOutlined />
        </div>
    </Dropdown>}

export default LanguageDropdown