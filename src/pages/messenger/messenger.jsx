import "./messenger.css";
import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/message/message";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import {useLocation } from 'react-router-dom';

import { io } from "socket.io-client";

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();
  const user1 = JSON.parse(localStorage.getItem('user'));
  const currentlyLogged=localStorage.getItem('currentlyLogged')
  const contractor = JSON.parse(localStorage.getItem('contractor'));
  var user;

  
  const {state} = useLocation();
  // var curCon;
  // console.log(state.curCon)
  // if(state){
      
  //     curCon  =state.curCon;
  //     console.log(curCon)
  // }
  if(currentlyLogged=='user'){
    user=user1
  }
  else{
    user=contractor
  }

  const scrollRef = useRef();

  //////////
  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user.data._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(
        user.followings.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [user]);
  ///////

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("http://localhost:6969/conversations/" + user.data._id);
        
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user.data._id]);

  useEffect(() => {
    const getMessages = async () => {
      // if(currentChat._id){

        try {
          console.log(currentChat._id)
          const res = await axios.get(`http://localhost:6969/messages/${currentChat._id}`);
          setMessages(res.data);
          console.log(res)
        } catch (err) {
          console.log(err);
        }
      // }
    };
    getMessages();
  }, [currentChat]);

  // const callFunc=async(c)=>{
  //   try {
  //     console.log(c._id)
  //     const res = await axios.get(`http://localhost:6969/messages/${c._id}`);
  //     setMessages(res.data);
  //     console.log(res)
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user.data._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user.data._id
    );
    console.log("look")
    console.log(receiverId)

    socket.current.emit("sendMessage", {
      senderId: user.data._id,
      receiverId,
      text: newMessage,
    });
    

    try {
      const res = await axios.post("http://localhost:6969/messages", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
console.log(user,1)
console.log(contractor,1)
console.log(currentlyLogged,3)
  return (
    <>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for Conversations" className="chatMenuInput" />
            {conversations.map((c) => (
              <div style={{
                backgroundColor: currentChat==c ? 'salmon' : '',
                color: currentChat==c ? 'white' : '',
              }} onClick={() => 
                setCurrentChat(c)
              
              }>
                <Conversation conversation={c} currentUser={user} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message message={m} own={m.sender === user.data._id} />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" 
                  onClick={handleSubmit}
                  >
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            )}
          </div>
        </div>
        {/* <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline
              onlineUsers={onlineUsers}
              currentId={user._id}
              setCurrentChat={setCurrentChat}
            />
          </div>
        </div> */}
      </div>
    </>
  );
}
