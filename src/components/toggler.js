import React from 'react'
import './toggler.css'

function Toggler(props) {
    return (
        <label className='toggler'>
            <input className='checkbox' type = 'checkbox'
            checked={props.isToggled} onChange={props.onToggle}/>
            <span className='slider' />
        </label>
    )
}

export default Toggler;