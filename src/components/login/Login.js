import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../../fireBase/fireBase'
import './Login.css'
import { login } from '../../reduxStore/UserSlice'

function Login() {

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [Name, setName] = useState('')
    const [ProfilePic, setProfilePic] = useState('')

    const dispatch = useDispatch()

    const register = () => {
        if (!Name) {
            return alert('Please Enter Full Name')
        }

        auth.createUserWithEmailAndPassword(Email, Password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: Name,
                photoURL: ProfilePic
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: Name,
                    photoUrl: ProfilePic
                }))
            })
        }).catch((error) => {
            alert(error)
        })
    }

    const loginToApp = (e) => {
        e.preventDefault()
    }

    return (
        <div className='login'>
            <img src="/images/link5.jpeg" alt="" />

            <form action="">
                <input type="text" value={Name} onChange={(e) => { setName(e.target.value) }} placeholder='Full Name (Required)' />
                <input type="text" value={ProfilePic} onChange={(e) => { setProfilePic(e.target.value) }} placeholder='Profile Pic URL (Optional)' />
                <input type="email" value={Email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' />
                <input type="password" value={Password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' />

                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a Member?{" "}
                <span className='login-register' onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
