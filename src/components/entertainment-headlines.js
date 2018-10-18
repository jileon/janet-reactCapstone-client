import React from 'react';
import {connect } from 'react-redux';
import {getEntHeadlines}from '../actions/category-action';
import HeadlineLi from '../components/headlineLi'
// import './css/headlines.css'
 
export class EntertainmentHeadlines extends React.Component{
componentDidMount(){
this.props.dispatch(getEntHeadlines());
}
render(){
    return(
        <section >
           <HeadlineLi className='scrolling-wrapper-flexbox' headlines={this.props.headlines} folders={this.props.folders}
           />
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
export default connect(mapStateToProps)(EntertainmentHeadlines);