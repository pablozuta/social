import React from 'react'
import Button from '@mui/material/Button';
import {useAuth0} from '@auth0/auth0-react'

function Logout() {
  const {logout} = useAuth0();
  return (
    <div>
      <Button variant="contained" onClick={() => logout()}>LOGOUT</Button>
    </div>
  )
}

export default Logout