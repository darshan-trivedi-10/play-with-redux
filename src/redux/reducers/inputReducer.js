const initialState = {
    value : '',
};

const reducers = (
    state = initialState, action
) => {
    switch (action.type) {
        case 'UPDATE_VALUE':
            return {...state, value : action.payload};
        default:
            return state;
    }
};

export default reducers;