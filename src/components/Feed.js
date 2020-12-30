import React from 'react'
import StoryReel from './StoryReel';
import '../css/Feed.css';

function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
        </div>
    )
}

export default Feed
