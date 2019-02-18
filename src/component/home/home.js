import React,{Component} from 'react';
import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewsList/newslist';
import VideoList from '../widgets/VideoList/videolist'
class Home extends Component{
    
    state = {
        newsSlider:{
            type:"featured",
            start:0,
            end:3,
            settings:{
                dots:false,
    
            }
        },
        newsList:{
            type:"card",
            loadmore:true,
            start:3,
            amount:3
        },
        videoList:{
            type:"card",
            loadmore:false,
            title:true,
            start:0,
            amount:3
        }
    }
    
    render(){
        return(
            <div>
                <NewsSlider { ...this.state.newsSlider } />
                <NewsList { ...this.state.newsList } />
                <VideoList { ...this.state.videoList }/>
            </div>
        )
    }
}
export default Home ;