import {Avatar, IconButton} from "@material-ui/core";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVert from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic'
import React,{useEffect,useState} from 'react'
import "./chat.css";
import { useParams } from "react-router-dom";
import db from './firebase';
import firebase from 'firebase';
import { useStateValue } from "./StateProvider";

function Chat() {

    const[input ,setInput]=useState('');

    const[seed,setSeed]=useState('');

    const { roomId } = useParams();

    const[roomName ,setRoomName] =useState('');

    const[messages,setMessages]=useState([]);
    const[{user},dispatch] =useStateValue();

    useEffect(() => {
        if(roomId){
        db.collection('Rooms').doc(roomId).onSnapshot((snapshot)=>(
            setRoomName(snapshot.data().Name))
        );
            db.collection('Rooms').doc(roomId).collection('messages').
            orderBy('timestamp','asc').onSnapshot(snapshot =>
                (
                    setMessages(snapshot.docs.map(doc => doc.data()))
                ));

        }
            
    }, [roomId]);

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));

    },[]);

   const sendMessage=(e) =>{
       e.preventDefault();
       console.log("yoooo",input);


       db.collection('Rooms').doc(roomId).collection('messages').add({
        message:input,
        name:user.displayName,
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
       })
       setInput(""); 
   }
    return (
        <div className="chat">
            <div className="Chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}  ></Avatar>
                <div className="chat_header_info">
                    <h3>{roomName}</h3>
                    <p>last seen{" "}
                        {new Date(
                            messages[messages.length-1]?.
                            timestamp?.toDate()
                        ).toUTCString()
                        }</p>
                </div>    

                <div className="chat_headerRight">
                    <IconButton >
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>

            <div className="Chat_body">
                {messages.map((message) =>(
                    <p className={`chat_message ${message.name==user.displayName
                         &&
                        'chat_reciver'}`}>
                        <span className="chat_user">{message.name}</span>
                            {message.message}
                        <span className="chat_time">
                           {new Date(message.timestamp?.toDate())
                           .toUTCString()} 
                        </span>
                        </p>

                ))}
                
            </div>
            <div className="Chat_footer">
                <InsertEmoticonIcon/>
                <form>
                    <input value={input} onChange={e => 
                        setInput(e.target.value)} type="text" placeholder="Type something.."/>
                    <button onClick={sendMessage} type="submit">send a message</button>
                </form>
                <MicIcon/>

            </div>
        </div>
    )
}

export default Chat
