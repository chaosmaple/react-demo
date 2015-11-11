import React from 'react'
import {Link} from 'react-router'

export default class Home extends React.Component {
    render() {
        return (
            <div className="btn-group">
                <button><Link to='/dutch'>AA</Link></button>
                <button><Link to='/prepay'>Prepay</Link></button>
            </div>
        );
    }
}
