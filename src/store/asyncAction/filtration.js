import { load_major_action } from "../reducer/majorFiltrationReducer";
import { load_industries_action } from '../reducer/indusrtyFiltrationReducer';
import { load_size_action } from "../reducer/sizeFiltrationReducer";

export const loadMajorFiltration = () => {
    return async (dispatch) => {
        const response = await fetch('http://localhost:8089/api/majors');
        const data = await response.json();
        dispatch(load_major_action(data));
    };
};

export const loadIndustriesFiltration = () => {
    return async (dispatch) => {
        const response = await fetch('http://localhost:8089/api/industries');
        const data = await response.json();
        dispatch(load_industries_action(data));
    };
};

export const loadSizeFiltration = () => {
    return async (dispatch) => {
        const response = await fetch('http://localhost:8089/api/size');
        const data = await response.json();
        dispatch(load_size_action(data));
    };
};
