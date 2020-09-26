import React, { useEffect, useState } from 'react';

const Nav = (props) => {
    const [title, setTitle] = useState('Sky Guide')

    useEffect(()=> {
        setTitle(props.geo.city)
    }, [props.geo])
    return<nav className="Nav">
    <p>=</p>
    <p>{title}</p>
    <p>o</p>
</nav>
}

export default Nav