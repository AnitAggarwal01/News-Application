import React from 'react';
import CardInfo from '../Cards/cardinfo';
import { Link } from 'react-router-dom';
import styles from './videolist.module.css';
const VideoListTemplate = (props)=>{
    return props.data.map((item,i)=>{
        return (
            <Link to={`/videos/${item.id}`} key={i}>
                <div className={styles.videoListItem_wrapper}>
                    <div className={styles.left} style={{ backgroundImage:`url(/images/videos/${item.image})`}}>
                        <div></div>
                    </div>
                    <div className={styles.right}>
                        <CardInfo teams={props.teams} team={item.team} date={item.date}/>
                        <h2>{item.title}</h2>
                    </div>
                </div>
            </Link>
            )
    })
}

export default VideoListTemplate ;