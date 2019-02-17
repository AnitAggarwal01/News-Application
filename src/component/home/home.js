import React,{Component} from 'react';
import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewsList/newslist'
class Home extends Component{
    
    state = {
        newsSlider:{
            type:"featured",
            start:0,
            end:15,
            settings:{
                dots:false,
    
            }
        },
        newsList:{
            type:"card",
            loadmore:true,
            start:3,
            amount:3
        }
    }
    
    render(){
        return(
            <div>
                <NewsSlider { ...this.state.newsSlider } />
                <NewsList { ...this.state.newsList } />
            </div>
        )
    }
}
export default Home ;