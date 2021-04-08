import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import  DonutLargeIcon  from '@material-ui/icons/DonutLarge';
import  ChatIcon  from '@material-ui/icons/Chat';
import  MoreVertIcon  from '@material-ui/icons/MoreVert';
import  SearchOutline from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat'
import './Sidebar.css'

function sidebar({ addNewChat}){
    return(
        <div className="sidebar">

          <div className="sidebar_header">
            <Avatar/>
            <div className="sidebar_header_right">
              <IconButton>
              <DonutLargeIcon/>
              </IconButton>
              <IconButton>
              <ChatIcon/>
              </IconButton>
              <IconButton>
              <MoreVertIcon/>
              </IconButton>
            </div>
          </div>

          <div className="sidebar_search">
              <SearchOutline/>
              <input placeholder="Explore server" type="text"/>
          </div>

          <div className="sidebar_chats">
              <SidebarChat addNewChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
          </div>  

        </div>
    )
}

export default sidebar;