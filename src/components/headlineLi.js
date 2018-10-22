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
					imageDiv = <div>{article.description}</div>;
				}
				return (

					<figure className="figurecard" key={index}>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
						<div className="image">{imageDiv}</div>
						<figcaption>
							
							<h4>
								
									{article.title}}
								
							</h4>
                           
							<p>
                            {article.description}
							</p>
                            <footer>
							{article.source.name}
							</footer>
						</figcaption>
                        {/* <a href="#" /> */}
                        </a>
					</figure>
				);
			})}
		</section>
	);
}
