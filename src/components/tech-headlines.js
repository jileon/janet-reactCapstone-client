import React from 'react';
import {connect } from 'react-redux';
import {getHeadlines}from '../actions/category-action';
// import './css/headlines.css'
import HeadlineLi from '../components/headlineLi';
 
export class TechHeadlines extends React.Component{
componentDidMount(){
    this.props.dispatch(getHeadlines(this.props.category));
}



render(){
    return(
        <section >
           <HeadlineLi className='scrolling-wrapper-flexbox' headlines={this.props.headlines} folders={this.props.folders}/>
        </section>
    )
} 
   
}


const mapStateToProps = state => {
    return {
        category: state.category.category,
        headlines: state.category.headlines,
        folders: state.protectedData.data
    };
};
export default connect(mapStateToProps)(TechHeadlines);