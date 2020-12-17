import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import { Avatar, IconButton } from '@material-ui/core';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';


function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'
                alt='Facebook Logo'
                />
                <div className="header__input">
                    <SearchIcon />
                    <input type='text' />
                </div>
            </div>
            <div className="header__middle">
                <div className="header__option">
                    <HomeIcon fontSize='large' />
                </div>
                <div className='header__option'>
                <FlagIcon fontSize='large' />
                </div>
                <div className='header__option'>
                <SubscriptionsIcon fontSize='large' />
                </div>
                <div className='header__option'>
                <StorefrontIcon fontSize='large' />
                </div>
                <div className='header__option'>
                <SupervisorAccountIcon fontSize='large' />
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                </div>
            </div>
        </div>

    )
}

export default Header
