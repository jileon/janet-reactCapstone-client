import React from 'react';
export default function FolderCurrentList(props) {

	//TODO: Add Mark as Read button that adds strike through class
	return (
		
		<ul articles={props.articles} >
	
			{props.articles.map((article, index) => {
				return (
					<li key={index}>
					<section>
                        <h3>{article.title}</h3>
						<p>{article.source}</p>
						</section>
						<p>Delete</p>
					</li>
				);
			})}
		</ul>
	);
}