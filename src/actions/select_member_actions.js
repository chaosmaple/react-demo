export const handleSelect = (member, checked) => {
    return {
        type: 'SET_MEMBERS',
        member: {
            [member]: checked
        }
    }
}

export const selectOk = (a) => {
    return {
        type: 'MEMBERS_OK',
        aaa: a
    }
}
