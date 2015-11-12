import React, {PropTypes} from 'react'
import _ from 'ramda'
import reduxFrom from 'redux-form'
import {connect} from 'react-redux'

import {members} from '../mock/members.js'
import * as SelectMembersActions from '../actions/select_member_actions'


class SelectMembers extends React.Component {
    renderList(data) {
        const {members, handleSelect} = this.props;
        const mapDataToCheckbox = (value) => {
            const id = `id__${value}`;
            return (
                <li key={value}>
                    <input
                        onChange={e => handleSelect(value, e.target.checked)}
                        checked={members.toJS()[value]}
                        type="checkbox"
                        id={id}/>
                    <label htmlFor={id}>{value}</label>
                </li>
            );
        }
        return _.map(mapDataToCheckbox)(data);
    }

    render() {
        return (
            <div className='select-members'>
                <h3 className='title'>Select Members</h3>
                <ul>{this.renderList(members)}</ul>
                <span className='desc'>members: {this.props.members?this.props.members.toString():0}</span>
                <br/>
                <button onClick={e => this.props.setMembers()}>SET MEMBERS</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        members: state.get('members')
    }
}

export default connect(
    mapStateToProps,
    SelectMembersActions
)(SelectMembers);
