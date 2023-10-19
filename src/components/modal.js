import React from 'react'
import './modal.css'
import {AiOutlineArrowDown, AiOutlineLike, AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'

export default function Modal(props) {
    return (
        <div className='modal-container'
            onClick = {(event) => {
                if(event.target.className === 'modal-container') {
                    props.closeModal()
                }
            }}>
            <div className='modal'>
                <div className='modal-image-container'>
                    <img className='modal-image' src={props.curImage.urls.small} />
                    <div className='download-overlay'>
                        <button className='download-btn'>
                        <AiOutlineArrowDown className='download-icon'/> Download</button>
                    </div>
                </div>
                <div className='modal-info-container'>
                    <div className='modal-user-container'>
                        <div className='modal-user-info'>
                            <img className = "modal-user-pic" src= {props.curImage.user.profile_image.small}/>
                            <div className = 'modal-names'>
                                <h5>{props.curImage.user.name}</h5>
                                <i>@{props.curImage.user.username}</i>
                            </div>
                        </div>
                        <div className='modal-socials'>
                            {props.curImage.user.instagram_username && <div className='social-data'><AiOutlineInstagram className='socials-icon'/><i>/{props.curImage.user.instagram_username}</i></div>}
                            {props.curImage.user.twitter_username && <div className='social-data'><AiOutlineTwitter className='socials-icon'/><i>/{props.curImage.user.twitter_username}</i></div>}
                        </div>
                    </div>
                    <div className='modal-likes'>
                        <AiOutlineLike className='like-icon'/><p>{props.curImage.likes}</p>

                    </div>
                    <div className='modal-tags'>
                        <h5>Related Tags</h5>
                        {props.curImage.tags.map((tag) => <button className='tag-btn'>{tag.title}</button>)}
                    </div>
                </div>
            </div>

        </div>
    )
}