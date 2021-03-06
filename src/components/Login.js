import React from 'react'
import '../css/Login.css'
import { Button } from "@mui/material"
import { auth, provider } from '../firebase/config'
import { useStateValue } from "../context/StateProvider"
import { actionTypes } from "../reducer/reducer"


function Login() {
    const [state, dispatch] = useStateValue()
    const signIn = (e) => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result)
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch((error) => {
            alert(error.message)
        })
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://res.cloudinary.com/tracyt/image/upload/v1637672702/team-chatter-icon_n9vk9m.png" alt="login icon" />
                <h1>Sign in to Team Chatter HQ</h1>
                <p>team-chatter.channel.com</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login

// 3:34:52
