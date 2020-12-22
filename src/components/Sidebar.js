import React from 'react';
import SidebarRow from './SidebarRow';
import '../css/Sidebar.css';
import { Chat, EmojiFlags, ExpandMore, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons';


function Sidebar() {
    return (
        <div classname='sidebar'>
            <SidebarRow src="https://avatars2.githubusercontent.com/u/29186781?s=460&u=e14a1dec89530d5427db49b2efbdb70db55fbb29&v=4" title='Joey Rivera'/>
            <SidebarRow Icon={LocalHospital} title='COVID-19 Information Center'/>
            <SidebarRow Icon={EmojiFlags} title='Pages'/>
            <SidebarRow Icon={People} title='Friends'/>
            <SidebarRow Icon={Chat} title='Messenger'/>
            <SidebarRow Icon={Storefront} title='MarketPlace'/>
            <SidebarRow Icon={VideoLibrary} title='Videos'/>
            <SidebarRow Icon={ExpandMore} title='Clubs'/>
        </div>
    )
}

export default Sidebar
