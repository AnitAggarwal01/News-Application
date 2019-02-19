import React,{ Component } from 'react';
import VideoList from '../widgets/VideoList/videolist'
class Videos extends Component{
    state={
        videoList:{
            type:"card",
            loadmore:true,
            title:false,
            start:0,
            amount:8
        }
    }
    render(){
        return(
            <div>
                <VideoList {...this.state.videoList}/>
            </div>
        )
    }
}
export default Videos; 