import React from 'react'
import '../css/Login.css'
import { Button } from "@mui/material"

function Login() {
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://res.cloudinary.com/tracyr/image/upload/v1483126281/teamPlayer_lgtva8.png" alt="login icon" />
                <h1>Sign in to Team Chatter HQ</h1>
                <p>team-chatter.channel.com</p>
                <Button>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
