import React from 'react';
import './css/folder-lists.css';

export default function FolderCurrentList(props) {

	return (
		<section articles={props.articles} className="folder-headline-cards">
			{props.articles.map((article, index) => {
				let imageDiv = <img className="card-image" src={article.image} alt={article.title} />;
				if (article.image === null) {
					imageDiv = (
						<img
							className="card-image"
							src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM5OTI2fQ&s=035baff191562ab81b1206b6305a6ab1"
							alt={article.title}
						/>
					);
				}
				return (
					<figure className="folder-figurecard" key={index}>
						<article>
							<a href={article.url} target="_blank" rel="noopener noreferrer">
								<div className="image">{imageDiv}</div>
								<figcaption>
								<h5 className='article-source'>{article.source}</h5>
									<h3>{article.title}}</h3>

									<p>{article.description}</p>
								</figcaption>
							</a>
						</article>
						<div className='deletearticle'>
						<button
							type="button"
							articleid={article._id}
							className="deleteFolderLink"
							onClick={props.deleteClick}
						>
							Delete
						</button>

						</div>
						
					</figure>
				);
			})}
		</section>
	);
}
