//User Menu Actions
import {SERVER} from '../config';
import axios from 'axios';
import {loadAuthToken} from '../local-storage';
import {fetchProtectedData} from '../actions/protected-data';

export const ADD_FOLDER= 'ADD_FOLDER';
export const addNewFolder = folderName => ({
    type: ADD_FOLDER,
    folderName
});

export const sendNewFolder = (foldername) => (dispatch) => {
    const authToken = loadAuthToken();
    return axios({
        method: 'post',
        url: `${SERVER}/newsflash/folders`,
        data:{foldername:foldername},
        headers:{
            "Authorization": `Bearer ${authToken}`
        }
      })
    .then(({data})=>{
       console.log(data);
       dispatch(fetchProtectedData());
    })
    .catch(error => console.log(error));
};