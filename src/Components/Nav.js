import { Button } from 'antd';
import Text from 'antd/lib/typography/Text';
import React, { useEffect, useState } from 'react';

const Nav = (props) => {
    const [title, setTitle] = useState('Sky Guide')

    useEffect(()=> {
        setTitle(props.geo.city)
    }, [props.geo])
    return<nav className="Nav">
    <Button type="text">=</Button>
    <Text>{title}</Text>
    <Button type="text">o</Button>
</nav>
}

export default Nav