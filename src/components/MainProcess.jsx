import React from 'react'
import {Route, Link} from 'react-router'

import Dutch from './Dutch'
import Prepay from './Prepay'

class MainProcess extends React.Component {
    render() {
        return (
            <div className="main-process">
                <Link to='/'>回到首页</Link>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

MainProcess.Route = (
    <Route component={MainProcess}>
        <Route path='/dutch' component={Dutch} />
        <Route path='/prepay' component={Prepay} />
    </Route>
);

export default MainProcess;
