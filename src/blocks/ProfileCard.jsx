import { Card } from '@mui/material'
import React from 'react'
import './profile-card.css'

function ProfileCard() {
  return (
    
   <Card>
    
    <div className="profile-card">
      <img
        src="https://avatars.githubusercontent.com/u/87880432?v=4"
        alt="" className="profile-avatar" />
      <h4>Danzer78</h4>
      <br />
      <p>If you need me, I'll be at the gym... or eating.I'm trying to be a better person but I'm really bad at it.
      </p>

      <div className="location-card">
        <img src="https://www.svgrepo.com/show/51526/location.svg" alt="svg icon location" class="location-icon" />
        <p>Sao Paulo, Brazil</p>
      </div>
      <a href="https://www.baeldung.com/">https://www.baeldung.com/</a>
      <div className="messages-item">
        <p>75 Messages</p>          
        <p>305 Followers</p>
      </div>

    </div>
    </Card>
  )
}

export default ProfileCard