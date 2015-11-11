import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, Link} from 'react-router'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import reducer from './reducers/reducer'
import Home from './components/Home'
import MainProcess from './components/MainProcess'

class App extends React.Component {
    render() {
        return this.props.children;
    }
}

const store = createStore(reducer);

const routes = (
    <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        {MainProcess.Route}
    </Route>
);

ReactDOM.render(
    <Provider store={store}>
        <Router>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);
