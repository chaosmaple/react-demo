export const handleSelect = (member, checked) => {
    return {
        type: 'SELECT_MEMBERS',
        member: {
            [member]: checked
        }
    }
}

export const setMembers = () => {
    return {
        type: 'SET_MEMBERS'
    }
}
