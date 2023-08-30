import { Card } from '@mui/material';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './profile-card.css';

function ProfileCard() {
  const { user, isAuthenticated } = useAuth0();
  return (

    <Card>

      <div className="profile-card">
        {isAuthenticated ? (<img
          src={user.picture}
          alt="user profile picture avatar" className="profile-avatar" />
          )
          :<img
            src="https://avatars.githubusercontent.com/u/87880432?v=4"
            alt="user profile picture avatar" className="profile-avatar" />}

        {isAuthenticated ?<h4>{user.name}</h4>: <h4>User Name</h4>}
       
        <br />
        <p>If you need me, I'll be at the gym... or eating.I'm trying to be a better person but I'm really bad at it.
        </p>

        <div className="location-card">
          <img src="https://www.svgrepo.com/show/51526/location.svg" alt="svg icon location" class="location-icon" />
        {isAuthenticated ?<p>{user.address}</p>:<p>Sao Paulo, Brazil</p>}
          
        </div>
        <a href="https://www.baeldung.com/">https://www.baeldung.com/</a>
        <div className="messages-item">
          <p>75 Messages</p>
          <p>305 Followers</p>
        </div>

      </div>
    </Card>
  );
}

export default ProfileCard;