import React , {useState}from 'react';
import {Link} from 'react-router-dom';
/*JUST LIKE ROUTE ANDBROWSER ROUTER ARE IN REACT-ROUTER DOM */

import './Join.css'


const Join =() => {
  /*IS THIS SOME SORT OF DESTRUCTURING?- yes CUZ NAME AND SETNAME ARE 2 VARIABLES */
    const [name , setName] = useState('');
    const [room ,setRoom] = useState('');

     return (
       <div className= "joinOuterContainer">
        <div className= "joinInnerContainer">
         <h1 className="heading">Join</h1>

         <div>
         <input placeholder="Name" className="joinInput" type="text" onChange={(event)=> {setName(event.target.value)}}/>
         </div>

         <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event)=>{setRoom(event.target.value.toLowerCase())}}/>
          </div>

{/*YOU WANT CONDITIONAL LOGIC HERE(BELOW) ? YOU SLAP IT IN AN ONCLICK, IN FACT, ANYTHING YOU WANT TO DO HERE, IT IS WHEN THE BUTTON IS CLICKED, SO YOU SLAP IT IN AN ONCLICK ANYWAY*/}

        <Link to={`/chat?name=${name}&room=${room}`} onClick={(event)=>(!name||!room) ?event.preventDefault():null}>

          <button className="button mt-20" type="submit">Sign In</button>
        </Link>

       </div>
        </div>
     )
}

export default Join;
