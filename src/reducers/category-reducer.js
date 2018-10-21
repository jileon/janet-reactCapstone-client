import {CATEGORY, HEADLINES, HEADLINES_LOADING} from '../actions/category-action';

const initialState = {
    category: 'headlines',
    headlines:[],
    loading: false,
    error: null,
};


//FIXME: SPINNER RENDERING OFF OF CATEGORY LOADING NOT HEADLINES LOADING
const categoryReducer = (state=initialState, action)=>{
    if (action.type===HEADLINES_LOADING){
        return Object.assign({}, state, {loading: false})
    }else if(action.type===HEADLINES){
        return Object.assign({}, state, {headlines:action.headlines, loading: false})
    }else if (action.type===CATEGORY){
        return Object.assign({}, state, {category:action.category, loading: false})
    } 
    return state;
}

export default categoryReducer;