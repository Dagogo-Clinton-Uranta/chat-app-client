import React from 'react';
import './Messages.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';

  const Messages =({messages,name}) => (
    
  <ScrollToBottom className='messages'>
   {messages.map((message, i)=>{ /*we are passing a map of paramenters, then we'll style them individually */
      return (
     <div key={i}>
     <Message message={message} name={name}/>
     </div>
   )})}
  </ScrollToBottom>
)

  





export default Messages;
