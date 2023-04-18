const defaultState = [];

const LOAD_MAJOR = 'LOAD_MAJOR';

export const load_major_action = (payload) => ({ type: LOAD_MAJOR, payload });


export const majorFiltrationReducer = (state = defaultState, action) => {
    if (action.type === LOAD_MAJOR) { 
        return action.payload
    } else {
        return state
    }
}