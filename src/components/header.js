import React from 'react'
import './header.css'
import { AiOutlineSearch } from 'react-icons/ai'

export default function header(props) {
    return (
        <form onSubmit={props.changehandler} className = "header-search-form">
            <h1>Download High Quality Images by creators</h1>
            <h5>Over 2.4 million+ stock Images by our talented community</h5>
            
            <div className='header-search-container'>
            <AiOutlineSearch className='searchicon'/>
                <input className = "header-main-search" type='text'
                placeholder = 'Search images, categories, wallpapers' value={props.search}
                onChange = {(event) => props.searchsetter(event.target.value)} />
            </div>
            
        </form> 
    )
}

