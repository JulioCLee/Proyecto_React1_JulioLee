import React from 'react';
import Logo from '../assets/img/Logo.png';


const Header = () => {
    
    return (
        <form className='header'>
            <img src={Logo} alt="logo" className='logo'/>

        </form>
    )
}

export default Header