import { combineReducers } from 'redux';
import categoryReducer from '../reducers/category-reducer';
import searchReducer from '../reducers/search-reducer';
import navReducer from './nav-reducer';

const rootReducer = combineReducers({
    category: categoryReducer,
    search: searchReducer,
    nav: navReducer
})

export default rootReducer;