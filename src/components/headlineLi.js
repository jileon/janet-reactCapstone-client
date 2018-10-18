import React from 'react';
import FolderAddToList from './folder-addToList';
export default function HeadlineLi(props){
return (
    <ul headlines={props.headlines} className={props.className}>
        {props.headlines.map((article, index) =>{
              let  imageDiv=<img src={article.urlToImage} alt={article.title}/>
              if (article.urlToImage===null){
                  imageDiv= <div>{article.description}</div>
              }    
            return <li key={index}>
                        <div className='card'>
                            <a href={article.url} target="_blank"><h2>{article.title}</h2></a>
                            {imageDiv}
                            <p>{article.source.name}</p>
                            <FolderAddToList folders={props.folders} />
                        </div>
                       
                    </li>
                
        })}
    </ul>
);
}