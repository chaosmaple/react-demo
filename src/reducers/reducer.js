import {fromJS, List, Map} from 'immutable'

const selectMembers = (state, member) => {
    if (state.get('members')) {
        return state.mergeIn(['members'], member);
    } else {
        return state.set('members', Map(member));
    }
}

const setMembers = (state) => {
    return state.updateIn(
        ['members'],
        members => members.filter(checked => checked)
    );
}

export default (state = fromJS({members: {}}), action) => {
    switch (action.type) {
        case 'SELECT_MEMBERS':
            return selectMembers(state, action.member);
            break;
        case 'SET_MEMBERS':
            return setMembers(state);
        default:
            return state;
    }
}
