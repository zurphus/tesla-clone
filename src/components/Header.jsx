import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { MdAccountCircle } from "react-icons/md";

const Header = ({ isMenuOpen, setIsMenuOpen }) => {

    return (
        <div className='header'>
            <div className="header__logo">
                <Link to="/">
                    <img className='header__logo-img' src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" alt="" />
                </Link>
            </div>
            <div className="header__links">
                <Link to="/">Model S</Link>
                <Link to="/">Model 3</Link>
                <Link to="/">Model X</Link>
                <Link to="/">Model Y</Link>
            </div>
            <div className="header__right">
                <Link to='/login' className={isMenuOpen ? 'header__link-hidden' : ''}>
                    <MdAccountCircle className='header__account'/>
                </Link>
                <div className='header__menu-wrap'>
                    <Hamburger className="header__menu" toggled={isMenuOpen} toggle={setIsMenuOpen} />
                </div>
            </div>
        </div>
    )
}

export default Header