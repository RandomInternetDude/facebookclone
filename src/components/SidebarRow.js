import React from 'react'
import { Avatar, Icon } from '@material-ui/core';
import '../css/sideBarRow.css'

function SidebarRow({src, icon, title}) {
    return (
        <div className="sideBarRow">
            {src && <Avatar src={src} />}
            {icon && <Icon/>}
            <div>{icon}</div>
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
