import React, { useState } from 'react'
import Header from '../components/Header';
import HeaderBlock from '../components/HeaderBlock';
import Menu from '../components/Menu';

const Home = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}></Header>
            <Menu isMenuOpen={isMenuOpen}/>
            <HeaderBlock />
        </>
    )
}

export default Home