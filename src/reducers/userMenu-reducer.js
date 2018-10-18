//userMenu Reducers
//FIXME: this doesn't do anything anymore. Fix or get rid of
import {ADD_FOLDER} from '../actions/userMenu-actions'
const initialState={
    folders:['Reading List']
}

const userMenuReducer= (state=initialState,action)=>{
if (action.type===ADD_FOLDER){
    return Object.assign({}, state, {folders:[...state.folders, action.folderName]})
}
return state;
}

export default userMenuReducer;