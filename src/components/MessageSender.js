import React from 'react'
import {Avatar} from "@material-ui/core";

function MessageSender() {
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input className="messageSender__input" placeholder={'Whats on your mind'}/>
                    <input placeholder="image url (optional)"></input>
                </form>
            </div>
        </div>
    )
}

export default MessageSender
