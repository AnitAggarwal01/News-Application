import React, { Component } from 'react';
import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewsList/newslist';
class News extends Component{
    
    state={
        newsSlider:{
            type:"featured",
            start:0,
            end:3,
            settings:{
                dots:false,
    
            }
        },
        newsList:{
            type:"photoCard",
            loadmore:true,
            start:0,
            amount:6
        }
    }
    
    render(){
        return(
            <div>
                <NewsSlider { ...this.state.newsSlider } />
                <NewsList {...this.state.newsList} />
            </div>
        )
    }
}
export default News;