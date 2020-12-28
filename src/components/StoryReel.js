import React from 'react';
import "../css/StoryReel.css";


function StoryReel() {
    return (
        <div className='storyReel'>
                <Story image={jersey} profileSrc={jersey} title={'Shernille Licud'} />
                <Story image={melanie} profileSrc={melanie} title={'Melanie Agner'} />
                <Story image={jaden} profileSrc={jaden} title={'Jaden Licud'} />
                <Story image={gina} profileSrc={gina} title={'Gina Tanedo'} />
        </div>
    )
}

export default StoryReel
