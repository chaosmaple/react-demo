import React from 'react'
import {connect} from 'react-redux'
import {Link, Route, IndexRoute} from 'react-router'

import * as SelectMembersActions from '../actions/select_member_actions'

import SelectMembers from './SelectMembers'

class Dutch extends React.Component {

    render() {
        return (
            <div className="dutch">
                {this.props.children}
            </div>
        );
    }
}

Dutch.Route = (
    <Route path='/dutch' component={Dutch}>
        <IndexRoute component={SelectMembers}/>
    </Route>
);

export default connect(
    state => {},
    SelectMembersActions
)(Dutch);
