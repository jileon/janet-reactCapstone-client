import React from 'react';
import FolderAddToList from './folder-addToList';
export default function HeadlineLi(props) {
	//maps through headlines passed from parent component (Everything, science, etc)
	//Renders a 'card' for each headlines
	//contains Add to Folder Button

	//EG everything-headlines ->headlineLi(here)
	return (
		<ul headlines={props.headlines} className="headline-cards">
			{props.headlines.map((article, index) => {
				let imageDiv = <img src={article.urlToImage} alt={article.title} />;
				if (article.urlToImage === null) {
					imageDiv = <div>{article.description}</div>;
				}
				return (
					// <li key={index} >
					// 	<figure className="card">
					// 		<div className="image">
					// 			{imageDiv}
					// 		</div>
					// 		<figcaption>
					// 			<a href={article.url} target="_blank" rel="noopener noreferrer">
					// 			<h3>{article.title}</h3>
					// 		</a>
					//                      <p> {article.source.name}</p>
					// 			<p>  {article.description}</p>
					// 		</figcaption>
					//         <FolderAddToList
					// 			folders={props.folders}
					// 			articletitle={article.title}
					// 			articledescription={article.description}
					// 			articleimage={article.urlToImage}
					// 			articleurl={article.url}
					// 			articlesource={article.source.name}
					// 		/>
					//         </figure>

					// </li>
					<li key={index} className="newscard">
						<figure className="card hover">
                            <div className="cardimage">
                            {imageDiv}
                            </div>
							<figcaption>
                                <h3>
                                <a href={article.url} target="_blank" rel="noopener noreferrer">
                                {article.title}}
                                </a>
                                </h3>
								<p>{article.description}</p>
							</figcaption>

						</figure>
                        <FolderAddToList
								folders={props.folders}
								articletitle={article.title}
								articledescription={article.description}
								articleimage={article.urlToImage}
								articleurl={article.url}
								articlesource={article.source.name}
							/>
					</li>
				);
			})}
		</ul>
	);
}
