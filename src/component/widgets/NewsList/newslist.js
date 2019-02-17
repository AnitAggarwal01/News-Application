import React,{ Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../../../config'
import styles from './newslist.module.css';
import Buttons from '../Buttons/buttons'

class NewsList extends Component{
    
    state={
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

    request = (start,end)=>{
        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        .then((response)=>{
            this.setState({
                items:[...this.state.items, ...response.data],
                start:this.state.start+this.state.amount,
                end:this.state.end+this.state.amount
            })
        })
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
                                        <h2>{item.title}</h2>
                                    </Link>
                                </div>
                            </div>
                        </CSSTransition>
                    )
                })
                break;
            default:
                template = null ;
        }
        return template ;
    }
    render(){
        return(
            <div>
                <TransitionGroup>
                        {this.renderNews(this.props.type)}
                </TransitionGroup>
               <Buttons { ...this.state.buttons }></Buttons>
            </div>
        )
    }
}
export default NewsList;