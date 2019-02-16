import React, {Component} from 'react';

import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
import './layout.css';
class Layout extends Component{
    state={
        showNav:false
    }
    toggleSideNav = (value)=>{
        this.setState({
            showNav:value
        })
    }
    render= ()=>{
        return(
            <div>
                <Header
                    showNav = {this.state.showNav}
                    onHideNav ={()=>this.toggleSideNav(false)}
                    onOpenNav ={()=>this.toggleSideNav(true)} 
                />
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}
export default Layout ;