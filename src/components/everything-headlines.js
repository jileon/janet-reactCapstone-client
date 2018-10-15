import React from 'react';
import {connect } from 'react-redux';
import {getHeadlines}from '../actions/category-action'
import './css/headlines.css'
 
export class EverythingHeadlines extends React.Component{
componentDidMount(){
this.props.dispatch(getHeadlines());
}



    render(){
       let headlines = this.props.headlines;
       const headlineList = headlines.map((article, index)=>{


           let  imageDiv=<img src={article.urlToImage} alt={article.title}/>
            if (article.urlToImage===null){
                imageDiv= <div>{article.description}</div>
            }

           return <li key={index}>
           <div className= 'card'>
           <h2>{article.title}</h2>
                    {imageDiv}
           <p>{article.source.name}</p>
           </div>
           
           </li>
       })
        return(
            <section>
                <ul className='scrolling-wrapper-flexbox'>
                {headlineList}
                </ul>
          
            </section>
        )
    }
   
}


const mapStateToProps = state => {
    return {
        category: state.category.category,
        headlines: state.category.headlines
    };
};
export default connect(mapStateToProps)(EverythingHeadlines);