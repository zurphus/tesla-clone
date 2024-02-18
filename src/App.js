import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { selectUser } from './features/userSlice';
import SignUp from './pages/SignUp';
import TeslaAccount from './pages/TeslaAccount';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';
import { auth } from './firebase/firebase';

function App() {

  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        )
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={user ? <Navigate to='/tesla-account'/> :  <Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/tesla-account' element={user ? <TeslaAccount/> : <Navigate to='/login'/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
