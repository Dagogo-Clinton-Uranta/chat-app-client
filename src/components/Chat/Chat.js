import React,{useState,useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';
import  InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer'

let socket;

const Chat =({location}) => {
  const[name,setName] =useState('');
  const[room,setRoom] =useState('');
  const [users, setUsers] = useState('');
  const[message,setMessage] = useState('');
  const[messages,setMessages] = useState([]);
  const ENDPOINT = 'https://dagogo-chat-app.herokuapp.com/';

useEffect(()=>{
      const {name,room} = queryString.parse(location.search);

     socket = io(ENDPOINT, {transports: ['websocket', 'polling', 'flashsocket']})  //ME I KNOW THIS AS IO.CONNECT
      setName(name);
      setRoom(room);

      socket.emit('join',{name:name , room:room},(error)=> {
        //we're not gonna use this (the callback recipient) here, but , this is for making something happen just after the event is recieved by the server ,like maybe error handling, or parsing of bad words or something
       if(error){
         alert(error);
       }
      });
       //I HAVE NEVER SEEN THIS BEFORE, RETURN--as a function ?? i guess it's in bracket but it's returning a function

      return () => {
        socket.emit('disconnect');
        socket.off();
      }
      

    },[ENDPOINT,location.search])

    console.log(socket)

    useEffect(() =>{

      socket.on('message',(message)=>{
       setMessages([...messages,message]); /*the thing we are adding here is the argument message*/

       socket.on("roomData", ({ users }) => {
        setUsers(users);
      });

     });
     console.log(socket)
   },[messages]); //the specifier of when to change is the state of message in this case. it needs to always be in an array, when specifying
     
   const sendMessage = (event) => {
        event.preventDefault();

        if(message){
          socket.emit('sendMessage',message,() => setMessage(''))
        } /*we have used the callback recipient here to change message state to blank. I believe that the state is being sent asa payload here*/
     }

     return (
       <div className="outerContainer">
         <div className="container">
           <InfoBar room={room}/>
           <Messages messages ={messages} name={name}/>
           <Input message={message} setMessage ={setMessage} sendMessage={sendMessage} />

    {/*if you wanna pass state just pass both 'state' and 'setState'*/}
        
         </div>
         <TextContainer users={users}/>
       </div>
     )
}

export default Chat;
