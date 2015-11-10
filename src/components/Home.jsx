import React from 'react'
import {Link} from 'react-router'

export default class Home extends React.Component {
    render() {
        return (
            <div className="btn-group">
                <button><Link to='/dutch'>AA结账</Link></button>
                <button><Link to='/prepay'>预付结账</Link></button>
            </div>
        );
    }
}
