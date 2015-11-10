import React from 'react'
import {members} from '../mock/members.js'
import _ from 'ramda'

class SelectMembers extends React.Component {
    renderList(data) {
        const mapDataToCheckbox = (value) => {
            const id = `id__${value}`
            return (
                <li>
                    <input type="checkbox" id={id} key={value}/>
                    <label htmlFor={id}>{value}</label>
                </li>
            );
        }
        return _.map(mapDataToCheckbox)(data);
    }

    render() {
        // console.log(data);
        return (
            <div className='select-members'>
                <ul>{this.renderList(members)}</ul>
                <button>next</button>
            </div>
        );
    }
}

export default SelectMembers;
