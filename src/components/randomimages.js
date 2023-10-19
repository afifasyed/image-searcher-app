import React from 'react'
import './image.css'
import axios from 'axios'
import Image from './image.js'

const API_URL = 'https://api.unsplash.com/';
const IMAGES_PER_PAGE = 30;

export default function DefaultImages(props) {
    const myapikey= process.env.REACT_APP_API_KEY;
    let newest = []
    
    const fetchRandomImages = async () => {
        try 
        {   const {data} = await axios.get(`${API_URL}photos?page=1&per_page=${IMAGES_PER_PAGE}&client_id=${myapikey}`);
            console.log('data', data, typeof(data),'data[0]',data['0'])
            let abc=[]
            newest = () => {
                for (let i=1; i<=IMAGES_PER_PAGE; i++) {
                    let imageItem=data[i.toString()]
                    abc.push(imageItem)
                    console.log('data item as array',data[i.toString()]) }
                return (abc)
            }
            console.log('newest', newest)
            
                // ret = (imageItem) => { 
                //     return (<Image key={imageItem.id} url={imageItem.urls.small}
                //         altdes={imageItem.alt_description} name={imageItem.user.name}
                //         uname={imageItem.user.username} likes={imageItem.likes}
                //         profilepic={imageItem.user.profile_image.small}
                //         onClick = {() => {
                //             props.modalSetter(true)
                //             props.currentImageSetter(imageItem)
                //         }}/> )}
            }
         
        
        catch (error)
        {
        console.log(error);
        }
      }

    fetchRandomImages()
    console.log('newest second time',newest)


//     const returner = abc.map(idNum => {
//         return (
//             <Image key = {data[idNum].id} url={image.urls.small} 
//             altdes = {image.alt_description} name = {image.user.name}
//             uname = {image.user.username} likes={image.likes} 
//             profilepic = {image.user.profile_image.small}
//             onClick = {() => { 
//             props.modalSetter(true)
//             props.currentImageSetter(image)}}/>)
// })
    return (
        <div className='images-container'>
            default images
            
        </div>
    )
}