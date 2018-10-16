import { combineReducers } from 'redux';
import categoryReducer from '../reducers/category-reducer';
import searchReducer from '../reducers/search-reducer'

const rootReducer = combineReducers({
    category: categoryReducer,
    search: searchReducer
})

export default rootReducer;