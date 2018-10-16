import React from 'react';
export default function HeadlineLi(props){

    let headlines = props.headlines;
       const headlineList = headlines.map((article, index)=>{
           let  imageDiv=<img src={article.urlToImage} alt={article.title}/>
            if (article.urlToImage===null){
                imageDiv= <div>{article.description}</div>
            }      
});

return (
    <ul headlines={props.headlines} className={props.className}>
        {props.headlines.map((article, index) =>{
              let  imageDiv=<img src={article.urlToImage} alt={article.title}/>
              if (article.urlToImage===null){
                  imageDiv= <div>{article.description}</div>
              }    
            return <li key={index}>
                        <div className='card'>
                            <h2>{article.title}</h2>
                            {imageDiv}
                            <p>{article.source.name}</p>
                        </div>
        
                    </li>
                
        })}
    </ul>
);
}