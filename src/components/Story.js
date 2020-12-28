import React from 'react'
import './story.css';


function Story({image, profilesrc, title}) {
    return (
        <div className='story' style={{ backgroundImage: `url(${image})` }}>
        <Avatar src={profileSrc} className='story__avatar' />
        <h4>{title}</h4>
      </div>
    )
}

export default Story
