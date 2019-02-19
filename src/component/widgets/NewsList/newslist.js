import React,{ Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../../../config'
import styles from './newslist.module.css';
import Buttons from '../Buttons/buttons'
import CardInfo from '../Cards/cardinfo'
class NewsList extends Component{
    
    state={
        teams:[],
        items:[],
        start:this.props.start,
        end:this.props.start+this.props.amount,
        amount:this.props.amount,
        buttons:{
            type:'loadmore',
            cta:'Load More News',
            loadMore:()=>this.loadMoreNews()
        }
    }
    
    componentWillMount(){
        this.request(this.state.start,this.state.end)
    }

    loadMoreNews=()=>{
        this.request(this.state.start,this.state.end)
    }
    
    renderNews = (type)=>{
        let template = null ;
        switch(type){
            case 'card':
                template = this.state.items.map((item,i)=>{
                    return(
                        <CSSTransition
                            classNames={{
                                enter:styles.newslist_wrapper,
                                enterActive:styles.newslist_wrapper_enter
                            }}
                            timeout={500}
                            key={i}
                        >
                            <div>
                                <div className={styles.newslist_item}>
                                    <Link to={`/articles/${item.id}`}>
                                        <CardInfo
                                            teams={this.state.teams} team={item.team} date={item.date}
                                        />
                                        <h2>{item.title}</h2>
                                    </Link>
                                </div>
                            </div>
                        </CSSTransition>
                    )
                })
                break;
            case 'photoCard':
            template = this.state.items.map((item,i)=>{
                return(
                    <CSSTransition
                        classNames={{
                            enter:styles.newslist_wrapper,
                            enterActive:styles.newslist_wrapper_enter
                        }}
                        timeout={500}
                        key={i}
                    >
                    <Link to={`/articles/${item.id}`}>
                        <div className={styles.flexWrapper}>
                            <div className={styles.left} style={{background:`url(/images/articles/${item.image})`}}>
                                <div></div>
                            </div>
                            <div className={styles.right}>
                                <CardInfo
                                    teams={this.state.teams} team={item.team} date={item.date}
                                />
                                <h2>{item.title}</h2>      
                            </div>
                        </div>
                    </Link>
                    </CSSTransition>
                )
            })            
                break;
            default:
                template = null ;
        }
        return template ;
    }

    request = (start,end)=>{
        if(this.state.teams.length<1){
            axios.get(`${URL}/teams`)
            .then( (response)=>{
                this.setState({
                    teams:response.data
                })
            })
        }
        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        .then((response)=>{
            this.setState({
                items:[...this.state.items, ...response.data],
                start:this.state.start+this.state.amount,
                end:this.state.end+this.state.amount
            })
        })
    }
    
    render(){
        return(
            <div>
                <TransitionGroup>
                        {this.renderNews(this.props.type)}
                </TransitionGroup>
                {
                    this.props.loadmore ?
                    <Buttons { ...this.state.buttons }/>
                    : null 
                }
            </div>
        )
    }
}

export default NewsList;