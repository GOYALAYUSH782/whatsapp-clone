import React from 'react'
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
  return (
    <div className='chat'>
      <div className='chat_header'>
        <Avatar />
        <div className='chat_headerInfo'>
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className='chat_headerRight'>
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className='chat_body'>
        <p className='chat_message'>
          <span className='chat_name'>
            Ayush
          </span>
          This is a message
          <span className='chat_timestamp'>
            {new Date().toLocaleString()}
          </span>
        </p>

        <p className='chat_message chat_receiver'>
          <span className='chat_name'>
            Ayush
          </span>
          This is a message
          <span className='chat_timestamp'>
            {new Date().toLocaleString()}
          </span>
        </p>

        <p className='chat_message'>
          <span className='chat_name'>
            Ayush
          </span>
          This is a message
          <span className='chat_timestamp'>
            {new Date().toLocaleString()}
          </span>
        </p>
      </div>
      <div className='chat_footer'>
        <InsertEmoticonIcon />
        <form>
          <input
            placeholder='Type a message'
            type='text'
          />
          <button type='submit'>
            Send Message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat
