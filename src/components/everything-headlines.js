import React from 'react';
import {connect } from 'react-redux';
import {getHeadlines}from '../actions/category-action';
import HeadlineLi from '../components/headlineLi';
// import './css/headlines.css';
 
export class EverythingHeadlines extends React.Component{

    
render(){
    return(
        <section >
           <HeadlineLi headlines={this.props.headlines}  folders={this.props.folders} />
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
export default connect(mapStateToProps)(EverythingHeadlines);