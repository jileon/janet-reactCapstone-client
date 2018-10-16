import {SHOW_NAV, HIDE_NAV} from '../actions/nav-action';

const initialState = {
    expandedNav:false
}

const navReducer = (state=initialState, action)=>{
    if (action.type===SHOW_NAV){
        return Object.assign({}, state, {expandedNav: true})
} else if (action.type===HIDE_NAV){
    return Object.assign({}, state, {expandedNav: false})
}
return state;
}

export default navReducer;