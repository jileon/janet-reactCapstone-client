import { combineReducers } from 'redux';
import categoryReducer from '../reducers/category-reducer';
import searchReducer from '../reducers/search-reducer';
import navReducer from './nav-reducer';
import userMenuReducer from './userMenu-reducer';

const rootReducer = combineReducers({
    category: categoryReducer,
    search: searchReducer,
    nav: navReducer,
    userMenu: userMenuReducer
})

export default rootReducer;