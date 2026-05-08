import React from 'react';
import logoImg from './logo.png';
import styles from './Logo.module.css';

export default function Logo() {
    return (
        <div className={styles.logoContainer}>
            <img
                src={logoImg}
                className='img-thumbnail'
                alt='T1 on Tour logo of a location pin'
            />
        </div>
    );
}