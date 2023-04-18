const defaultState = [];

const LOAD_VIDEOUS = 'LOAD_VIDEOUS';

export const load_videous_action = (payload) => ({ type: LOAD_VIDEOUS, payload });

export const videoReducer = (state = defaultState, action) => {
    if (action.type === LOAD_VIDEOUS) { 
        // console.log(action.payload);
        return action.payload
    } else {
        return state
    }
}