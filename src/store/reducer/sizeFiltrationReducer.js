const defaultState = [];

const LOAD_SIZE = 'LOAD_SIZE';

export const load_size_action = (payload) => ({ type: LOAD_SIZE, payload });

export const sizeFiltrationReducer = (state = defaultState, action) => {
    if (action.type === LOAD_SIZE) {
        return action.payload
    } else {
        return state
    }
}