export const addContact = (name, email) => {
    return ({type: 'ADD_CONTACT', payload: {name, email}});
};

export const changeFilterKeyword = (keyword) => {
    return ({type: 'CHANGE_KEYWORD', payload: keyword});
};
