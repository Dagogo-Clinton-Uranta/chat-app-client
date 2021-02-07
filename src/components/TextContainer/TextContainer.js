import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>(Socket.IO) Realtime Chat Application ! <span role="img" aria-label="emoji">💬</span></h1>
      <h2 className='tryItPrompt'>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2>
       <h3>Note: Please make sure you have typed in the exact   </h3>
       <h3>name of the chat room as your friends, otherwise</h3>
       <h3>you'll be all alone. Love, Developers <span role="img" aria-label="emoji">❤️</span></h3>
      
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;