import { Button } from 'antd';
import Text from 'antd/lib/typography/Text';
import React, { useEffect, useState } from 'react';

const Nav = (props) => {
    const [title, setTitle] = useState('Sky Guide')
    const camelName = (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    useEffect(()=> {
        if (props.geo.city) setTitle(<><b>{camelName(props.geo.city)}</b>, {props.geo.region}</>)
    }, [props.geo])
    return<nav className="Nav">
    <Button type="text">
        {/* <i className="fas fa-bars"/> */}
    </Button>
    <Text>{title?title:"loading..."}</Text>
    <Button type="text">
        {/* <i className="fas fa-search-location"/> */}
        </Button>
</nav>
}

export default Nav