import React from 'react'
import './image.css'
import {AiOutlineLike} from 'react-icons/ai'

function Image(props) {
    
        return (
            <div className='image-card' onClick={props.onClick}>
                <img  
                src = {props.url} 
                alt = {props.altdes} 
                className = "image" />
                <div className='info-div'>
                    <img className = "ppic"
                    src = {props.profilepic} />
                    <div className='names'>
                        <p>{props.name}</p>
                        <i>@{props.uname}</i>
                    </div>
                    <div className='likes'>
                        <AiOutlineLike className='like-button'/>
                        <p className='likes-count'>{(props.likes/1000).toFixed(1)}K</p>
                    </div>
                    
                </div>
            </div>
            
        )
        
    
}

export default Image