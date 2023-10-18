const initialState = {
    value : '',
};

const inputReducer = (
    state = initialState, action
) => {
    switch (action.type) {
        case 'UPDATE_VALUE':
            return {...state, value : action.payload};
        default:
            return state;
    }
};

export default inputReducer;