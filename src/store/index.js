import { combineReducers, createStore, applyMiddleware  } from 'redux';
import { videoReducer } from '../store/reducer/videoReducer';
import { majorFiltrationReducer } from './reducer/majorFiltrationReducer';
import { indusrtyFiltrationReducer } from './reducer/indusrtyFiltrationReducer';
import { sizeFiltrationReducer } from './reducer/sizeFiltrationReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    videous: videoReducer,
    major_filtration: majorFiltrationReducer,
    industry_filtration: indusrtyFiltrationReducer,
    size_filtration: sizeFiltrationReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));