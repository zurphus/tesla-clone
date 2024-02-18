import React, { useState } from 'react'
import './Login.css'
import ButtonPrimary from '../components/ButtonPrimary'
import ButtonSecondary from '../components/ButtonSecondary'

import { Link, useNavigate } from 'react-router-dom'
import { SlGlobe } from "react-icons/sl";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    

    const signIn = (e) => {
        e.preventDefault()

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userAuth) => {
            dispatch(
                login({
                  email: userAuth.user.email,
                  uid: userAuth.user.uid,
                  displayName: userAuth.user.displayName,
                })
              )
            window.location.href = "/tesla-account";
        })
        .catch((err) => {
            alert(err.message)
        })
    }

    return (
        <div className="login">
            <div className="login__header">
                <div className="login__logo">
                    <Link to='/'>
                        <img className='header__logo-img' src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" alt="" />
                    </Link>
                </div>
                <div className='login__language'>
                    <SlGlobe /> <span>en-US</span>
                </div>
            </div>
            <div className="login__info">
                <h1>Sign In</h1>
                <form className='login__form' action="">
                    <label htmlFor="email">Email Adress</label>
                    <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' autoComplete="on" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <ButtonPrimary name='Sign In' type="submit" onClick={signIn}/>
                </form>
                <div className="login__divider">
                    <hr /> <span>OR</span> <hr />
                </div>
                <Link to='/sign-up'>
                    <ButtonSecondary name='create account'></ButtonSecondary>
                </Link>
            </div>
        </div>
    )
}

export default Login