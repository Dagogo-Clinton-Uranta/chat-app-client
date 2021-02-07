import React from 'react';
import './InfoBar.css';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';

//dont forget to download the icons from icons

const InfoBar=({room}) => {
return (
   <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online indicator"/>
      <h3>Room Name:{' '}'{room.toUpperCase()}'</h3>
    </div>
    <div className="rightInnerContainer">
     <a href="/"><img src={closeIcon} alt="close "/></a>
    </div>
  </div>
)};
export default InfoBar;
