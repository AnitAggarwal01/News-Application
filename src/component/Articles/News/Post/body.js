import React from 'react';
import styles from '../../articles.module.css';
const Body = (props)=>{
    console.log(props)
    return props.data ?
        (
        <div className={styles.articleBodyWrapper}>
            <div className={styles.bodyTitle}>
                {props.data.title}
            </div>
            <div className={styles.articleImage}
                style={{background:`url(/images/articles/${props.data.image})`}}
            >
            </div>
            <div className={styles.bodyText}>
                {props.data.body}
            </div>
        </div>
    ) :
    null 
}
export default Body ;