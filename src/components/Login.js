import React from 'react'
import '../css/Login.css'
import { Button } from "@mui/material"
import { auth, provider } from '../firebase/config'


function Login() {
    const signIn = (e) => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            alert(error.message)
        })
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://res.cloudinary.com/tracyr/image/upload/v1483126281/teamPlayer_lgtva8.png" alt="login icon" />
                <h1>Sign in to Team Chatter HQ</h1>
                <p>team-chatter.channel.com</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login

// 3:17:19
