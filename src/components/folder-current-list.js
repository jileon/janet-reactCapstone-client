import React from 'react';
export default function FolderCurrentList(props) {

	return (
		
		<ul articles={props.articles} >
	
			{props.articles.map((article, index) => {
				return (
					<li key={index}>
                        <h3>{article.title}</h3>
						<p>{article.source}</p>
					</li>
				);
			})}
		</ul>
	);
}