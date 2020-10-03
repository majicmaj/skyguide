import { Button } from 'antd';
import Text from 'antd/lib/typography/Text';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import LanguageDropdown from './LanguageDropdown';

const Nav = (props) => {
    const {t} = useTranslation();
    const [title, setTitle] = useState('Sky Guide')
    const [deferredPrompt, setDeferredPrompt] = useState(null)
    const camelName = (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    const showInstall = () => deferredPrompt !== null ? <i className="fas fa-download"/> : <></>
    useEffect(()=> {
        if (props.geo.city) setTitle(<><b>{camelName(props.geo.city)}</b>, {props.geo.region}</>)
    }, [props.geo])
    useEffect(()=> {
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            setDeferredPrompt(e)
          });
    }, [])
    
    return<nav className="Nav">
        <Button type="text">
            {showInstall()}
        </Button>
        <Text>{title?title:t('loading')}</Text>
        <LanguageDropdown setLang={props.setLang} setDirection={props.setDirection}/>
    </nav>
}

export default Nav