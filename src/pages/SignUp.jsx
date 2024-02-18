import React, { useState } from 'react'
import './SignUp.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/firebase'
import { login } from '../features/userSlice'
import { SlGlobe } from "react-icons/sl";

import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const signUp = async (e) => {
    e.preventDefault()
    if (!fName) {
      return alert('Please enter a first name!')
    }
    if (!lName) {
      return alert('Please enter a last name!')
    }
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(user, {
        displayName: fName
      })

      dispatch(login({
        email: user.email,
        uid: user.uid,
        displayName: fName,
      }));
      
      navigate('/tesla-account');
        
      } catch (error) {
        console.error('Error signing up:', error.message);
        alert('Error signing up. Please try again.');
      }       
    }

  return (
    <div className='signup'>
      <div className='signup__header'>
        <div className='signup__logo'>
          <Link to='/'>
            <img
              src='https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png'
              alt=''
            />
          </Link>
        </div>
        <div className='signup__language'>
          <SlGlobe /> <span>en-US</span>
        </div>
      </div>
      <div className='signup__info'>
        <h1>Create Account</h1>
        <form className='signup__form'>
          <label htmlFor='fName'>First Name</label>
          <input
            id='fName'
            type='text'
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
          <label htmlFor='lName'>Last Name</label>
          <input
            id='lName'
            type='text'
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          />
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            autoComplete="on"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' onClick={signUp}>
            Create Account
          </button>
        </form>
        <div className='signup__divider'>
          <hr /> <span>OR</span> <hr />
        </div>
        <Link to='/login'>
          <button>Sign In</button>
        </Link>
      </div>
    </div>
  )
}

export default SignUp