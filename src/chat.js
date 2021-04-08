import {Avatar, IconButton} from "@material-ui/core";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVert from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic'
import React,{useEffect,useState} from 'react'
import "./chat.css";

function Chat() {

    const[input ,setInput]=useState('');

    const[seed,setSeed]=useState('');
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));

    },[]);

   const sendMessage=(e) =>{
       e.preventDefault();
       console.log("yoooo",input);
       setInput(""); 
   }
    return (
        <div className="chat">
            <div className="Chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}  ></Avatar>
                <div className="chat_header_info">
                    <h3>server Name</h3>
                    <p>Last seen...</p>
                </div>    

                <div className="chat_headerRight">
                    <IconButton>
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
                <p className={`chat_message ${true &&
                'chat_reciver'}`}>
                <span className="chat_user">Arush</span>
                    hey guys
                <span className="chat_time">12:00</span>
                </p>
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
