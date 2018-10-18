//folder-actions for drop down menu
import {SERVER} from '../config';
import {fetchProtectedData} from '../actions/protected-data';
import {loadAuthToken} from '../local-storage';
import axios from 'axios';



//Need to add handling for dupe articles
export const sendArticleToFolder= (articles, folderId) => (dispatch) => {
    const authToken = loadAuthToken();

    console.log('data sent is :'+ JSON.stringify(articles));
    // console.log(folderId)
    return axios({
        method: 'put',
        url: `${SERVER}/newsflash/folders/${folderId}`,
        data:{articles: articles},
        headers:{
            "Authorization": `Bearer ${authToken}`
        }
      })
    .then(({data})=>{
        console.log('data rececived===================')
       console.log(data);
    // dispatch(fetchProtectedData());
    })
    .catch(error => console.log(error));
};