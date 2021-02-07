import React from 'react'
import './Input.css'

//once you pass state as props, no need to even import state ffrom react to the file you passed it to (i.e this one), it'll just become redundant and be consuming space

 const Input = ({setMessage ,sendMessage, message }) => {
return (

<form className ='form'>
  <input
    className="input"
    type="text"
    placeholder="Type a message..."

   value={message}  onChange={({ target: { value } })=>setMessage(value)}
  onKeyPress={event =>(event.key === "Enter")? sendMessage(event):null}
  />

   <button  className = "sendButton" onClick={(event) =>{sendMessage(event)}}>Send</button>
</form>

  )

}

export default Input;
