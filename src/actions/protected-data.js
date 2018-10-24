import {SERVER} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});


export const SET_PROTECTED_ARTICLES= 'SET_PROTECTED_ARTICLES';
export const setProtectedArticles = articles => ({
    type: SET_PROTECTED_ARTICLES,
    articles
});


export const SET_PROTECTED_FOLDERNAME= 'SET_PROTECTED_FOLDERNAME';
export const setProtectedFolder = folder => ({
    type: SET_PROTECTED_FOLDERNAME,
    folder
});

//fetches folders and adds folder object to protectDate in state
export const fetchProtectedData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${SERVER}/api/newsflash/folders/`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchProtectedDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};
