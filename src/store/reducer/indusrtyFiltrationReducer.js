const defaultState = [];

const LOAD_INDUSTRIES = 'LOAD_INDUSTRIES';

export const load_industries_action = (payload) => ({ type: LOAD_INDUSTRIES, payload });

export const indusrtyFiltrationReducer = (state = defaultState, action) => {
    if (action.type === LOAD_INDUSTRIES) {
        return action.payload
    } else {
        return state
    }
}