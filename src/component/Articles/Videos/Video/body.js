import React from 'react';
import styles from '../../articles.module.css';
import VideosRelated from '../../../widgets/VideoList/VideosRelated/videosrelated';
const Body = (props)=>{
    return(
        <div className={styles.articleBodyWrapper}>
            <div className={styles.bodyTitle}>
                {props.data.article.title}
            </div>
            <iframe
                title ="videoplayer"
                width = "100%"
                height = "400px"
                src = {`https://www.youtube.com/embed/${ props.data.article.url }`} >
            </iframe>
            <div className={styles.RelatedVideosWrapper}>
                <h3>Related Videos</h3>
                <VideosRelated
                    data={props.data.related}
                    teams={props.data.teams}      
                />
            </div>
        </div>   
        )
}

export default Body ;