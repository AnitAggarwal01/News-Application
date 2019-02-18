import React from 'react';
import styles from './buttons.module.css'
import { Link } from 'react-router-dom';
const Buttons = (props)=>{
    let template = null ;
    switch(props.type){
        case 'loadmore':
            template = (
                <div className={styles.info} onClick={props.loadMore}>
                    {props.cta}
                </div>
            )
            break ;
        case 'linkTo':(
            template =
                <Link className ={styles.info} to={props.linkto}>
                    {props.cta}
                </Link>
            )
            break;
        default:
            template = null ;
    }
    return template
}
export default Buttons;