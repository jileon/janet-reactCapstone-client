import React from 'react';
import {connect } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import {getHeadlines}from '../actions/category-action'
import './css/main-section.css'
 
export class Headlines extends React.Component{
componentDidMount(){
this.props.dispatch(getHeadlines());
}

getCurrentDate(){
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth()+1; //January is 0!
    const yyyy = today.getFullYear(); 

   return  mm + '/' + dd + '/' + yyyy;
}


    render(){
       let headlines = this.props.headlines;
       console.log(headlines);
      
       const headlineDivs = headlines.map((article, index)=>{
        let  imageDiv=<img src={article.urlToImage} alt={article.title}/>
        if (article.urlToImage===null){
            imageDiv= <div>{article.description}</div>
        }
        return  <div key={index}>
         <h2>{article.title}</h2>
         {imageDiv}
        <p>Source: {article.source.name}</p>
    </div>
        
    })
        return(
            <section>
                 <h2> Headlines for {this.getCurrentDate()} </h2>
                <Carousel>
              
                {headlineDivs}
                
                </Carousel>          
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
export default connect(mapStateToProps)(Headlines);