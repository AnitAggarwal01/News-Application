import React from 'react';
import VideoListTemplate from '../videolist_template';
const VideosRelated = (props)=>{
    return(
        <div>
            <VideoListTemplate
                data = {props.data}
                teams = {props.teams}
            />
        </div>
    )
}
export default VideosRelated ;