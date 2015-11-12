import {List, Map} from 'immutable'

const selectMembers = (state, member) => {
    if (state.get('members')) {
        return state.mergeIn(['members'], member);
    } else {
        return state.set('members', Map(member));
    }
}

const setMembers = (state) => {
    const members = state.get('members');
    const b = Map(members).filter(checked => checked);
    return state.set('members', b);
}

export default (state = Map(), action) => {
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
