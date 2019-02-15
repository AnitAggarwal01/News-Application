import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './component/home/home'
import Layout from './hoc/layout/layout';

class Routes extends Component{

    render = ()=>{
        return(
            <Layout>
                <Switch>
                    <Route to='/' exact component={Home}></Route>
                </Switch>
            </Layout>
        )
    }
}

export default Routes ;