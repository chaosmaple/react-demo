import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, Link} from 'react-router'

import Home from './components/Home'
import MainProcess from './components/MainProcess'

class App extends React.Component {
    render() {
        return this.props.children;
    }
}

const routes = (
    <Route component={App}>
        <Route path='/' component={Home}/>
        {MainProcess.Route}
    </Route>
);

ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('app')
);
