import React ,{ Component } from 'react';
import axios from 'axios';
import { URL } from '../../../../config';
import Header from './header';
import Body from './body';
class VideoArticle extends Component{
    state = {
        article:[],
        team:[],
        teams:[],
        related:[]
    }

    componentWillMount(){
        axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
        .then((response)=>{
            let article = response.data[0]
            axios.get(`${URL}/teams?id=${response.data[0].team}`)
            .then((response)=>{
                this.setState({
                    article,
                    team:response.data[0]
                });
                this.getRelated();
                
            })
        })
        
    }

    getRelated = ()=>{
        axios.get(`${URL}/teams`)
        .then((response)=>{
            let teams = response.data ;
            axios.get(`${URL}/videos?q=${this.state.team.city}&_limit=3`)
            .then((response)=>{
                this.setState({
                  teams,
                  related:[...response.data]  
                })
            })
        })
    }
    
    render(){
        const team = this.state.team ;
        const article = this.state.article
        const teams = this.state.teams;
        const related = this.state.related;
        return(
            <div>
                <Header teamData={team}/>
                <Body data={ {article, teams, related}}/>
            </div>
        )
    }
}
export default VideoArticle;