import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './Sidebarchat.css'

function SidebarChat({addNewChat}) {
    
    const [seed, setSeed]=useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() *5000));
    }, []);

    const createChat =() => {
        const roomName=prompt("please enter server name");

        if(roomName) {
            //dbms...........
        }
    };

    return !addNewChat ? (
        <div className="sidebarchat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarchat_info ">
                <h3>Room Name</h3>
                <p>last message...</p>
            </div>
        </div>
    ):(
        <div onClick={createChat} className="sidebarchat">
            <h3>Add new server</h3>
        </div>
    )
}

export default SidebarChat
 