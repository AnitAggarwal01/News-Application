import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './component/home/home'
import VideoArticle from './component/Articles/Videos/Video/index';
import Layout from './hoc/layout/layout';
import NewsArticles from './component/Articles/News/Post/index'
class Routes extends Component{

    render = ()=>{
        return(
            <Layout>
                <Switch>
                    <Route path="/articles/:id"  component={NewsArticles}/>
                    <Route path="/videos/:id" component={VideoArticle}/>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </Layout>
        )
    }
}

export default Routes ;