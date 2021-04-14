import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import db from './firebase';
import './Sidebarchat.css'
import {Link } from 'react-router-dom';

function SidebarChat({id,name,addNewChat}) {
    
    const [seed, setSeed]=useState('');

    const [messages,setMessages] =useState("");

    useEffect(() =>{
        if(id){
            db.collection('Rooms').doc(id).collection('messages').
            orderBy('timestamp','desc').onSnapshot(snapshot =>(
                setMessages(snapshot.docs.map((doc)=>
                doc.data())))
            );
        }
    },[id]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() *5000));
    }, []);

    const createChat =() => {
        const roomName=prompt("please enter server name");

        if(roomName) {
            //dbms...........
            db.collection("Rooms").add({
                Name: roomName,
            });

        }
    };

    return !addNewChat ? (
        <Link to={`/Rooms/${id}`}>
        <div className="sidebarchat">
            <Avatar className="Avt" src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarchat_info ">
                <h3>{name}</h3>
                <p>{messages[0]?.message}</p>
            </div>
        </div>
        </Link>
    ):(
        <div onClick={createChat} className="sidebarchat">
            <h3>Add new server</h3>
        </div>
        
    )
}

export default SidebarChat
 