import React from 'react';
import {connect } from 'react-redux';
import {getHeadlines}from '../actions/category-action';
import EverythingHeadlines from '../components/everything-headlines';
import './css/headlines.css';
 
export class Headlines extends React.Component{
componentDidMount(){

}

getCurrentDate(){
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth()+1; //January is 0!
    const yyyy = today.getFullYear(); 

   return  mm + '/' + dd + '/' + yyyy;
}


    render(){
       let headlineList;

    if (this.props.category=='headlines'){
      console.log('hello');
    
      headlineList=<EverythingHeadlines/>
    
       }

        return(
            <section>
                <h2> Headlines for {this.getCurrentDate()} </h2>
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
export default connect(mapStateToProps)(Headlines);