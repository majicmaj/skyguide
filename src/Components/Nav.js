import { Button } from 'antd';
import Text from 'antd/lib/typography/Text';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import LanguageDropdown from './LanguageDropdown';

const Nav = (props) => {
    const {t} = useTranslation();
    const [title, setTitle] = useState('Sky Guide')
    const camelName = (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    useEffect(()=> {
        if (props.geo.city) setTitle(<><b>{camelName(props.geo.city)}</b>, {props.geo.region}</>)
    }, [props.geo])
    

    return<nav className="Nav">
        <Button type="text">
        </Button>
        <Text>{title?title:t('loading')}</Text>
        <LanguageDropdown setLang={props.setLang} setDirection={props.setDirection}/>
    </nav>
}

export default Nav