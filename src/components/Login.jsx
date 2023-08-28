import React from 'react'
import Button from '@mui/material/Button';
import {useAuth0, } from '@auth0/auth0-react'
import '../index.css'

function Login() {
    const {loginWithRedirect} = useAuth0()
    return (
        <div >
            <Button variant="contained" onClick={() => loginWithRedirect()}>LOGIN</Button>
        </div>
    )
}

export default Login