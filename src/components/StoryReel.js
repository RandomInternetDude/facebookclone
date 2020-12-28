import React from 'react';
import "../css/StoryReel.css";
import Story from './Story';
import Avery from '../assets/images/Avery.jpg';
import alanis from '../assets/images/alanis.jpg'
import jake from '../assets/images/jake.jpg'
import me from '../assets/images/me.jpg'

const myprofile ="https://avatars2.githubusercontent.com/u/29186781?s=460&u=e14a1dec89530d5427db49b2efbdb70db55fbb29&v=4";

function StoryReel() {
    return (
        <div className='storyReel'>
                <Story image={Avery} profileSrc={Avery} title={'Avery Rice'} />
                <Story image={alanis} profileSrc={alanis} title={'Alanis Rivera'} />
                <Story image={jake} profileSrc={jake} title={'Alanis Rivera'} />
                <Story image={me} profileSrc={myprofile} title={'Alanis Rivera'} />
        </div>
    )
}

export default StoryReel
