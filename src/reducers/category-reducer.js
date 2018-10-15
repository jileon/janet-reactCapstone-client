import {CATEGORY, HEADLINES} from '../actions/category-action';

const initialState = {
    category: 'headlines',
    headlines:[],
};

const categoryReducer = (state=initialState, action)=>{
    if (action.type===CATEGORY){
        return Object.assign({}, state, {category:action.category})
    } else if(action.type===HEADLINES){
        return Object.assign({}, state, {headlines:action.headlines})
    }
    return state;
}

export default categoryReducer;