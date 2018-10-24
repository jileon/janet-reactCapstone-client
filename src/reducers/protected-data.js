import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    SET_PROTECTED_ARTICLES,
    SET_PROTECTED_FOLDERNAME
} from '../actions/protected-data';

const initialState = {
    data: [],
    error: null,
    currentFolderArticles:[],
    currentFolder:''
};

export default function protectedDataReducer(state = initialState, action) {
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }else if (action.type === SET_PROTECTED_ARTICLES) {
        return Object.assign({}, state, {currentFolderArticles: action.articles});
    }else if (action.type === SET_PROTECTED_FOLDERNAME) {
        return Object.assign({}, state, {currentFolder: action.folder});
    }
    return state;
}
