import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.jpg';


const Header = () => {
    return (
        <header>
            <div className='container'>
                <Link to='/'>
                    <img src={logo} alt="logo" className='logo' /> <span className='logo-txt'>Estatery</span>
                </Link>
                <div className='filters'>
                    <Link className='link' to=''>Home</Link>
                    <Link className='link' to=''>About</Link>
                </div>
                <div className='log-btn'>
                <Link className='link2' to=''>Log in</Link>
                <Link className='link2' to=''>Sign up</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;