import { load_videous_action } from "../reducer/videoReducer";

export const loadVideous = (id) => {
    return async (dispatch) => {
    const response = await fetch(
        `http://localhost:8089/api/articles?roleId=${id}`
    );
        const data = await response.json();
        // console.log(data);
        dispatch(load_videous_action(data));
    };
};
