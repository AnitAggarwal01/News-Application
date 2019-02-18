import React,{ Component } from 'react';
import axios from 'axios';
import { URL } from '../../../config';
import Buttons from '../Buttons/buttons';
import styles from './videolist.module.css';
import VideoListTemplate from './videolist_template';
class VideoList extends Component{

    state={
        teams:[],
        videos:[],
        start:this.props.start,
        end:this.props.start+this.props.amount,
        amount:this.props.amount,
        buttonsLoadMore:{
            type:'loadmore',
            cta:'Load More Videos',
            loadMore:()=>this.loadMoreVideos()
        },
        buttonsLink:{
            type:'linkTo',
            cta:'More Videos',
            linkto:'/videos'
        }
    }
    
    componentWillMount(){
        this.request(this.state.start, this.state.end)
    }

    loadMoreVideos = ()=>{
        this.request(this.state.start,this.state.end)
    }

    renderButton = ()=>{
        return this.props.loadmore ? <Buttons { ...this.state.buttonsLoadMore }/> : <Buttons {...this.state.buttonsLink} /> 
    }    

    renderTitle = (title)=>{
        return title ? <h3> <b>NBA</b> Videos </h3> : null
    }

    renderVideos = (type)=>{
        let template = null ;
        switch(type){
            case 'card':
                template = <VideoListTemplate 
                            data = {this.state.videos}
                            teams = {this.state.teams}
                            />
                break;
            default:
                template = null ;
        }
        return template;
    }

    request = (start, end)=>{
        if(this.state.teams.length<1){
            axios.get(`${URL}/teams`)
            .then( (response)=>{
                this.setState({
                    teams:response.data
                })
            })
        }
        axios.get(`${URL}/videos?_start=${this.state.start}&_end=${this.state.end}`)
        .then((response)=>{
            this.setState({
                videos:[ ...this.state.videos, ...response.data ],
                start:this.state.start+this.state.amount,
                end:this.state.end+this.state.amount
            })
        })
    }

    render(){
        return(
            <div className={styles.videolist_wrapper}>
                { this.renderTitle(this.props.title) }
                { this.renderVideos(this.props.type)}
                { this.renderButton() }
            </div>
        )
    }
}

export default VideoList;