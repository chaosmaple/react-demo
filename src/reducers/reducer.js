import {List, Map} from 'immutable'

const setMembers = (state, member) => {
    if (state.get('members')) {
        return state.mergeIn(['members'], member);
    } else {
        return state.set('members', Map(member));
    }
}

const confirmMembers = (state) => {
    const members = state.get('members');
    const b = Map(members).filter(checked => checked).toList();
    console.log(b);
    return state.set('membersNow', b).remove('members');
}

export default (state = Map(), action) => {
    switch (action.type) {
        case 'SET_MEMBERS':
            return setMembers(state, action.member);
            break;
        case 'MEMBERS_OK':
            return confirmMembers(state);
        default:
            return state;
    }
}
