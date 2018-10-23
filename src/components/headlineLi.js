import React from 'react';
import FolderAddToList from './folder-addToList';

export default function HeadlineLi(props) {
	//maps through headlines passed from parent component (Everything, science, etc)
	//Renders a 'card' for each headlines
	//contains Add to Folder Button

	//EG everything-headlines ->headlineLi(here)
	return (
		<section headlines={props.headlines} className="headline-cards">
			{props.headlines.map((article, index) => {
				let imageDiv = <img className="card-image" src={article.urlToImage} alt={article.title} />;
				if (article.urlToImage === null) {
					imageDiv = <img className="card-image" src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjM5OTI2fQ&s=c8a8a0c9e5cb794cb7edfd7f97c0749b' alt={article.title} />;;
					
				}
				return (
					<figure className="figurecard" key={index}>
					<article>
						<a href={article.url} target="_blank" rel="noopener noreferrer">
							<div className="image">{imageDiv}</div>
							<figcaption>
								<p>{article.source.name}</p>
								<h3>{article.title}}</h3>

								<p>{article.description}</p>
							</figcaption>

							{/* <a href="#" /> */}
						</a>
						</article>
						<footer>
							<FolderAddToList
								folders={props.folders}
								articletitle={article.title}
								articledescription={article.description}
								articleimage={article.urlToImage}
								articleurl={article.url}
								articlesource={article.source.name}
							/>
						</footer>
					</figure>
				);
			})}
		</section>
	);
}
