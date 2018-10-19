//folder-actions for drop down menu
import {SERVER} from '../config';
import {fetchProtectedData} from '../actions/protected-data';
import {loadAuthToken} from '../local-storage';
import axios from 'axios';
import {setProtectedFolder} from '../actions/protected-data';


//Need to add handling for dupe articles
export const sendArticleToFolder= (article, folderId) => (dispatch) => {
    const authToken = loadAuthToken();

    // console.log('data sent is :'+ JSON.stringify(article));
    // console.log(folderId)
    return axios({
        method: 'put',
        url: `${SERVER}/newsflash/folders/${folderId}`,
        data:{article: article},
        headers:{
            "Authorization": `Bearer ${authToken}`
        }
      })
    .then(({data})=>{
    dispatch(fetchProtectedData());
    })
    .catch(error => console.log(error));
};

export const getArticlesPerFolder= (folderId) => (dispatch) => {
    const authToken = loadAuthToken();


    // console.log(folderId)
    return axios({
        method: 'get',
        url: `${SERVER}/newsflash/folders/${folderId}`,
        headers:{
            "Authorization": `Bearer ${authToken}`
        }
      })
    .then(({data})=>{
    dispatch(setProtectedFolder(data.articles));
    })
    .catch(error => console.log(error));
};