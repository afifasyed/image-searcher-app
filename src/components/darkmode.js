import React from 'react'
import './darkmode.css'

export default function Darkmode(props) {
    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark')
    }
    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light')
    }

    if (props.darkmode) {
        setDarkMode();        
    }
    else {
        setLightMode()
    }

}