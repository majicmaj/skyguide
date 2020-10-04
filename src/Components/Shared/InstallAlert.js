import { Alert } from 'antd'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const InstallAlert = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null)

    useEffect(() => {
        if (!window.matchMedia('(display-mode: fullscreen)').matches) {
            window.addEventListener('beforeinstallprompt', (e) => {
                e.preventDefault();
                setDeferredPrompt(e)
            });
        }
    }, [])

    const { t } = useTranslation()
    const showInstall = () => deferredPrompt !== null ?
        <Alert
            className = "alert"
            message = {` ${t('add me to your home screen')}`}
            closable = {true}
            icon = {<i className="fas fa-arrow-circle-down" onClick={() => deferredPrompt.prompt()} />}
            showIcon = {true}
        ></Alert> :
        <></>

    return <>{showInstall()}</>
}
export default InstallAlert