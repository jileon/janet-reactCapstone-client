import React from 'react';
import FolderAddToList from './folder-addToList';
export default function HeadlineLi(props){


    //maps through headlines passed from parent component (Everything, science, etc)
    //Renders a 'card' for each headlines
    //contains Add to Folder Button
 
	//EG everything-headlines ->headlineLi(here)
return (
    <ul headlines={props.headlines} className={props.className}>
        {props.headlines.map((article, index) =>{
              let  imageDiv=<img src={article.urlToImage} alt={article.title}/>
              if (article.urlToImage===null){
                  imageDiv= <div>{article.description}</div>
              }    
            return <li key={index}>
                        <div className='card'>
                            <a href={article.url} target="_blank" rel="noopener noreferrer"><h2>{article.title}</h2></a>
                            {imageDiv}
                            <p>{article.source.name}</p>
                            <FolderAddToList 
                            folders={props.folders} 
                            articletitle={article.title} 
                            articledescription={article.description} 
                            articleimage={article.urlToImage} 
                            articleurl={article.url} 
                            articlesource={article.source.name} />
                        </div>
                       
                    </li>
                
        })}
    </ul>
);
}