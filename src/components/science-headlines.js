import React from 'react';
import {connect } from 'react-redux';
import {getScienceHeadlines}from '../actions/category-action';
import HeadlineLi from '../components/headlineLi';
// import './css/headlines.css'
 
export class ScienceHeadlines extends React.Component{
componentDidMount(){
this.props.dispatch(getScienceHeadlines());
}
render(){
    return(
        <section >
           <HeadlineLi className='scrolling-wrapper-flexbox' headlines={this.props.headlines}/>
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
export default connect(mapStateToProps)(ScienceHeadlines);