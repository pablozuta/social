import { Card } from '@mui/material';
import React, { useState } from 'react';
import './friends-card.css';

function FriendsCard(props) {
  const [showCard, setShowCard] = useState(true);

  const handleUnfollowClick = () => {
    setShowCard(false);
  };

  if (!showCard) {
    return null;
  }

  return (
    <Card >
      <div className="profile-card-followers">
        <div className="profile-card-avatar_followers">
          <img
            src={props.image}
            alt=""
            className="profile-avatar-followers"
          />
        </div>
        <div className="profile-card-data">
          <h4>{props.name}</h4>
          <p>{props.handle}</p>
          <p>{props.bio}</p>
        </div>
        <div className="profile-card-button">
          <button onClick={handleUnfollowClick}>
            <span className="label"></span>
          </button>
        </div>
      </div>
    </Card>
  );
}

export default FriendsCard;
