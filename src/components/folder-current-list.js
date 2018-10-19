import React from 'react';
import { sendArticleToFolder } from '../actions/folder-actions';
export default function FolderCurrentList(props) {

	//TODO: Add Mark as Read button that adds strike through class
	return (
		
		<ul articles={props.articles} >
	
			{props.articles.map((article, index) => {
				return (
					<li key={index} id={article._id}>
					
					<section>
					<a href={article.url} target="_blank" rel="noopener noreferrer"><h2>{article.title}</h2></a>
						<p>{article.source}</p>
						<img src={article.image} alt={article.title}/>
						<p>{article.description}</p>
						</section>
						<button type="button" articleid={article._id} className="deleteLink" onClick={props.deleteClick}>
									Delete
								</button>
					</li>
				);
			})}
		</ul>
	);
}