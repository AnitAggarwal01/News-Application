import React, { Component } from 'react';
import axios from 'axios';
import { URL } from '../../../../config';
import Header from './header.js';
import Body from './body.js';
import styles from '../../articles.module.css';

class NewsArticles extends Component{
    
    state={
        article:[],
        team:[]
    }

    componentWillMount(){
        axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
        .then((response)=>{
            let article = response.data[0];
            axios.get(`${URL}/teams?id=${article.team}`)
            .then((response)=>{
                this.setState({
                    article,
                    team:response.data[0]
                })
            })
        })
    }
    
    render(){
        const team = this.state.team ;
        const article = this.state.article ;
        return(
            <div className={ styles.headerWrapper }>
                <Header
                    teamData={ team }
                    date={ article.date }
                    author={ article.author }
                />
                <Body data={ article }/>
            </div>            
        )
    }
}

export default NewsArticles ;