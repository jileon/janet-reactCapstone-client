import React from 'react';
import {connect } from 'react-redux';
import {getBusHeadlines}from '../actions/category-action'
// import './css/headlines.css'
import HeadlineLi from '../components/headlineLi'
 
export class BusinessHeadlines extends React.Component{
componentDidMount(){
this.props.dispatch(getBusHeadlines());
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
export default connect(mapStateToProps)(BusinessHeadlines);