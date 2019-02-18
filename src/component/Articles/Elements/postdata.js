import React from 'react';
import styles from '../articles.module.css';
const PostData = (props)=>{
    return(
        <div className={styles.postDataWrapper}>
            <div className={styles.date}>
                <span>Date: </span>{props.data.date}
            </div>
            <div className={styles.author}>
                <span>Author: </span>{props.data.author}
            </div>
            
        </div>
    )
}
export default PostData ;