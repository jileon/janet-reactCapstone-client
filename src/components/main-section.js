// import React from 'react';
// import {connect } from 'react-redux';
// import store from '../store';
// import {getHeadlines}from '../actions/category-action'
// import './css/main-section.css'
 
// export class MainSection extends React.Component{
// componentDidMount(){
// this.props.dispatch(getHeadlines());
// }

// getCurrentDate(){
//     const today = new Date();
//     const dd = today.getDate();
//     const mm = today.getMonth()+1; //January is 0!
//     const yyyy = today.getFullYear(); 

//    return  mm + '/' + dd + '/' + yyyy;
// }


//     render(){
//        let headlines = this.props.headlines;
//        console.log(headlines);
//        const headlineList = headlines.map((article, index)=>{


//            let  imageDiv=<img src={article.urlToImage} alt={article.title}/>
//             if (article.urlToImage===null){
//                 imageDiv= <div>{article.description}</div>
//             }

//            return <li key={index}>
//            <div>
//            <h2>{article.title}</h2>
//                     {imageDiv}
//            <p>{article.source.name}</p>
//            </div>
           
//            </li>
//        })
//         return(
//             <section>
//                 <h2> Headlines for {this.getCurrentDate()} </h2>
//                 <ul className='mainUl'>
//                 {headlineList}
//                 </ul>
          
          
//             </section>
//         )
//     }
   
// }


// const mapStateToProps = state => {
//     return {
//         category: state.category.category,
//         headlines: state.category.headlines
//     };
// };
// export default connect(mapStateToProps)(MainSection);