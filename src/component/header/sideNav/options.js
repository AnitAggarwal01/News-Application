import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import styles from './sidenav.module.css'
const Options=()=>{

    const items=[
        {
            type:styles.option,
            icon:'home',
            text:'Home',
            link:'/'
        },
        {
            type:styles.option,
            icon:'newspaper-o',
            text:'News',
            link:'/news'
        },
        {
            type:styles.option,
            icon:'play',
            text:'Videos',
            link:'/videos'
        },
        {
            type:styles.option,
            icon:'sign-in',
            text:'Sign In',
            link:'/login'
        }
    ]
        const showItems=()=>{
        return items.map((item,i)=>{
                return(
                    <div key={i} className={item.type}>
                        <Link to={item.link}>
                            <FontAwesome name={item.icon}/>{item.text}
                        </Link>
                    </div>
                )
            })
        
    }
    

    return(
        <div>
            {showItems()}
        </div>
    )
}
export default Options;