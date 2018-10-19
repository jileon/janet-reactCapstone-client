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
                        <h3>{article.title}</h3>
						<p>{article.source}</p>
						<img src={article.image} alt={article.title}/>
						<p>{article.description}</p>
						</section>
						<p  articleid={article._id} className="deleteLink" onClick={props.deleteClick}>
									Delete
								</p>
					</li>
				);
			})}
		</ul>
	);
}