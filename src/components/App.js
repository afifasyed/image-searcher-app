import React, {useEffect} from 'react'
import './App.css';
import axios from 'axios'
import Image from './image.js'
import Navbar from './navbar.js'
import Header from './header.js'
import Darkmode from './darkmode.js'
import Modal from './modal.js'
import DefaultImages from './randomimages.js'

const API_URL = 'https://api.unsplash.com/';
const IMAGES_PER_PAGE = 30;

export default function App() {
  const myapikey= process.env.REACT_APP_API_KEY;
  const [searchinput1, setter] = React.useState("")
  const [searchinput2, setter2] = React.useState("")
  const [errorMessage, setErrorMessage] = React.useState("")
  const [currentimage, currentImageSetter] = React.useState(null)
  const [images, setImages] = React.useState([])
  const [modalOpen, modalSetter] = React.useState(false)
  const [darkMode, setDarkMode] = React.useState(false)

  const fetchImages = async (searchinput) => {
    try 
    {   setErrorMessage("")
        const {data} = await axios.get(`${API_URL}search/photos?query=${searchinput}&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${myapikey}`);
        console.log('data', data.results)
        console.log(data)
        setImages(data.results)
    }
    catch (error) 
    {   setErrorMessage("Error. Something went wrong. Please try again later.")
        console.log(error);
    }
  }

  function handleSearch(event) {
    event.preventDefault()
    setter(event.target.value)
    console.log(searchinput1)
    fetchImages(searchinput1)
  }

  function handleSearch2(event) {
    event.preventDefault()
    setter2(event.target.value)
    console.log(searchinput2)
    fetchImages(searchinput2)
  }

  return (
    <div className="App">
      <Darkmode darkmode={darkMode}/>
      <Navbar search={searchinput1} searchsetter = {setter}
      changehandler={handleSearch} isToggled={darkMode}
      setIsToggled={setDarkMode}/>
      <Header search={searchinput2} searchsetter = {setter2}
      changehandler={handleSearch2}/>
      {errorMessage && <div className='error-message'>{errorMessage}</div>}
      {images.length === 0 && <div className='request'>Type in the search bar to view images</div>}
      <div className='images-container'>
        {images.map(image => {
            return (<Image key = {image.id} 
              url={image.urls.small} 
              altdes = {image.alt_description} name = {image.user.name}
              uname = {image.user.username} likes={image.likes} 
              profilepic = {image.user.profile_image.small}
              onClick = {() => { 
                modalSetter(true)
                currentImageSetter(image)}}/>)
        })}
      </div>
      {modalOpen && <Modal curImage = {currentimage} closeModal={() => modalSetter(false)}/>}
    </div>
  );
}
