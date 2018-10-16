import {SHOW_NAV} from '../actions/nav-action';

const initialState = {
    expandedNav:false
}

const navReducer = (state=initialState, action)=>{
    if (action.type===SHOW_NAV){
        return Object.assign({}, state, {expandedNav: true})
   
   
}
return state;
}

export default navReducer;