import {MODAL_ON, MODAL_OFF} from '../actions/modal-actions';

const initialState={
    showModal: false
}

const modalReducer=(state=initialState, action)=>{

    if (action.type===MODAL_ON){
        return Object.assign({}, state, {showModal:true})
    }else if (action.type===MODAL_OFF){
        return Object.assign({}, state, {showModal:false})
    }
    return state;

}

export default modalReducer;