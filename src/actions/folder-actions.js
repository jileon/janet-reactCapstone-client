//folder-actions for drop down menu
import { SERVER } from '../config';
import { fetchProtectedData } from '../actions/protected-data';
import { loadAuthToken } from '../local-storage';
import { setProtectedArticles, setProtectedFolder } from '../actions/protected-data';
import axios from 'axios';


export const sendArticleToFolder = (article, folderId) => (dispatch) => {
	const authToken = loadAuthToken();

	return axios({
		method: 'put',
		url: `${SERVER}/api/newsflash/folders/${folderId}`,
		data: { article: article },
		headers: {
			Authorization: `Bearer ${authToken}`
		}
	})
		.then(({ data }) => {
			dispatch(fetchProtectedData());
		})
		.catch((error) => console.log(error));
};

export const getArticlesPerFolder = (folderId) => (dispatch) => {
	const authToken = loadAuthToken();

	return axios({
		method: 'get',
		url: `${SERVER}/api/newsflash/folders/${folderId}`,
		headers: {
			Authorization: `Bearer ${authToken}`
		}
	})
		.then(({ data }) => {
			dispatch(setProtectedFolder(data.foldername));
			dispatch(setProtectedArticles(data.articles));
		})
		.catch((error) => console.log(error));
};

export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const deleteArticle = (folderId, articleId) => (dispatch) => {
	const authToken = loadAuthToken();
	return axios({
		method: 'put',
		url: `${SERVER}/api/newsflash/folders/removearticle/${folderId}`,
		data: { articleId: articleId },
		headers: {
			Authorization: `Bearer ${authToken}`
		}
	})
		.then(({ data }) => {
			dispatch(setProtectedArticles(data.articles));
		})
		.catch((error) => console.log(error));
};
