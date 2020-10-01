import { Button } from 'antd';
import Text from 'antd/lib/typography/Text';
import React, { useEffect, useState } from 'react';

const Nav = (props) => {
    const [title, setTitle] = useState('Sky Guide')

    useEffect(()=> {
        setTitle(props.geo.city)
    }, [props.geo])
    return<nav className="Nav">
    <Button type="text">
        <i className="fas fa-bars"/>
    </Button>
    <Text>{title?title:"loading..."}</Text>
    <Button type="text">
        <i className="fas fa-search-location"/>
        </Button>
</nav>
}

export default Nav