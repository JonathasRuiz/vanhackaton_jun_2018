import React from 'react';
import styles from './style.css';
import { Link } from    'react-router-dom';

const Header = () => {  
    return (
        <div>
            <div className={styles.header_wrapper}>
                <Link to="/">
                    <div className={styles.logo_wrapper}>
                        <img className={styles.logo} src="./img/logo.png" alt="this is Logo"/>
                    </div>
                </Link>
                <div className={styles.title_wrapper}>
                    <h3 className={styles.title}>World Cup Results</h3>
                </div>
            </div>
        </div>
    );
};

export default Header;