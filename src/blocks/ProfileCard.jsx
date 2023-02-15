import { Card } from '@mui/material'
import React from 'react'
import './profile-card.css'

function ProfileCard() {
  return (
    
   <Card>
    <div className="profile-card">
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7959eaa6-5390-47f6-8d5f-86afc4577958/dcfie4l-6318f442-944d-45d8-9302-8b18ea40670e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc5NTllYWE2LTUzOTAtNDdmNi04ZDVmLTg2YWZjNDU3Nzk1OFwvZGNmaWU0bC02MzE4ZjQ0Mi05NDRkLTQ1ZDgtOTMwMi04YjE4ZWE0MDY3MGUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iXdbi55XWDlA_CdIRMWrEz-m7oTqJFvok1HxFpasmT0"
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