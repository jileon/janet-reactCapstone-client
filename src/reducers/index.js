import { combineReducers } from 'redux';
import categoryReducer from '../reducers/category-reducer';
import searchReducer from '../reducers/search-reducer';
import navReducer from './nav-reducer';
import userMenuReducer from './userMenu-reducer';
import authReducer from './auth';
import protectedDataReducer from './protected-data';
import modalReducer from './modal-reducer';
import {reducer as formReducer} from 'redux-form';


const rootReducer = combineReducers({
    category: categoryReducer,
    search: searchReducer,
    nav: navReducer,
    userMenu: userMenuReducer,
    auth: authReducer,
    protectedData: protectedDataReducer,
    form: formReducer,
    modal: modalReducer
})

export default rootReducer;