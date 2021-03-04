import React from 'react';
import './Sidebar.css';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SideBarChat from './SideBarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar_header'>
        <Avatar
          src='https://avatars.githubusercontent.com/u/34646825?s=460&u=f15299b12ad5b2dafff22a3b81b064cf33db0333&v=4'
        />
        <div className='sidebar__headerRight'>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className='sidebar_search'>
        <div className='sidebar_searchContainer'>
          <SearchIcon />
          <input
            placeholder='Search or start new chat'
            type='text'
          />
        </div>
      </div>
      <div className='sidebar_chat'>
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
      </div>
    </div>
  )
}

export default Sidebar
