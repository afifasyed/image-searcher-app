import React, {useState} from 'react'
import './navbar.css'
import Toggler from './toggler.js'

import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'

export default function Navbar(props) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [searchBarOpen, setSearchBar] = useState(false)

    return (
        <nav onClick = {(e) => {
            if(e.target.className !== 'search-box') {
                if(searchBarOpen === true) {
                    setSearchBar(!searchBarOpen) }
            }}}>
            <h3>ImageSearcher</h3>
            <form className="search-form"onSubmit={props.changehandler}>
                <input id='search-box' className={searchBarOpen ? 'search-box' : 'search-bar-hidden'}
                type='text' placeholder='Search' 
                value = {props.search}
                onChange={(event) => props.searchsetter(event.target.value)
                 }></input>
            </form>
            
            <div className='search-icon' onClick = {() => {
                setSearchBar(!searchBarOpen)}}>
                {!searchBarOpen && <AiOutlineSearch />}
            </div>
            <ul className={menuOpen ? "menu-open" : "menu-close"}>
                <li>Explore</li>
                <li>Collection</li>
                <li>Community</li>
                <li>Dark Mode
                    <Toggler isToggled={props.isToggled}
                    onToggle={() => props.setIsToggled(!props.isToggled)}
                    className='toggler'/>
                </li>
            </ul>
            <div className='hamburger-menu' onClick = {() => {
                setMenuOpen(!menuOpen)}} >
                {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
        </nav>
    )
}
