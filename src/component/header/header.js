import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import SideNav from './sideNav/sideNav'
import styles from './header.module.css';

const Header = (props)=>{


    const logo = ()=>{
        return(
            <Link to='/' className={styles.logo}>
                <img alt="NBA Logo"src="/images/nba_logo.png"></img>
            </Link>
        )
    }
    const navbar = ()=>{
        return(
            <div>
                <FontAwesome name='bars' className={styles.navbar}
                    onClick={props.onOpenNav}
                />
            </div>
        )
    }
    return(
        <header className={styles.header}>
            <SideNav {...props}/>
            <div className={styles.headerOpt}>
                {navbar()}
                {logo()}
            </div>
        </header>
    )
}
export default Header ;