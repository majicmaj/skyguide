import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import netlifyIdentity from 'netlify-identity-widget';

const UserDropdown = (props) => {
    const logoutMenu = <Menu>
        <Menu.Item>
            { props.user?.user_metadata.full_name }
        </Menu.Item>
        <Menu.Item onClick={() => netlifyIdentity.logout()}>
            Logout
        </Menu.Item>
    </Menu>
    
    const loginMenu = <Menu>
        <Menu.Item onClick={() => netlifyIdentity.open()}>
            Login
        </Menu.Item>
    </Menu>

    const menu = () => props.user !== null ? logoutMenu : loginMenu

    return <Dropdown overlay={menu} >
        <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <i className="fas fa-user" /><DownOutlined />
        </div>
    </Dropdown>}

export default UserDropdown