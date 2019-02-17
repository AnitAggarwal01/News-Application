import React,{Component} from 'react';
import axios from 'axios';
import SliderTemplate from './slider_templates';
import { URL } from '../../../config'
class NewsSlider extends Component{
    
    state={
        data:[],
        type:this.props.type,
        settings:this.props.settings
    }

    componentWillMount(){
        axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.end}`)
        .then((response)=>{
            this.setState({
                data:response.data
            })
        })
    }

    render(){
        return(
            <SliderTemplate {...this.state}/>
        )
    }
}
export default NewsSlider ;