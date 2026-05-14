import React from 'react';
import logoImg from './logo.png';
import './Logo.css';

export default function Logo() {
    return (
        <div className='logo-div'>
            <img
                src={logoImg}
                className='logo'
                alt='T1 on Tour logo of a location pin'
            />
            <h1 className='logo-h1'>T1 on Tour</h1>
        </div>
    );
}