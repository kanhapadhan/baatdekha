import React from 'react';
import { IoMdCall } from "react-icons/io";
import './VehicleCard.css'

const VehicleCard = ({ name, village, contact, Icon, iconSrc }) => {
  return (
    <div className="vehicle-card">
      <div className="avatar-img">
          <Icon size={40} height={35} />
      </div>
      <div className="content">
        <div className="username">{name}</div>
        <div className="villagename">{village}</div>
      </div>
      <a className="call-icon" href={`tel:${contact}`} >
        <IoMdCall size={30} color="green"/>
      </a>
    </div>
  );
};

export default VehicleCard;