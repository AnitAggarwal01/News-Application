import React from 'react';
import {Link} from 'react-router-dom';
import styles from './footer.module.css';
import {CURRENT_YEAR} from '../../../src/config' 
const Footer=()=>{
    return(
        <div className={styles.footer}>
            <Link to='/' className={styles.logo}>
                <img alt="NBA Logo"src="/images/nba_logo.png"></img>
            </Link>
            <div className={styles.right}>
                @ {CURRENT_YEAR} All Rights Reserved.
            </div>
        </div>

    )
}
export default Footer ;