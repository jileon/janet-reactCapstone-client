import React from 'react';
import {connect } from 'react-redux';
import HeadlineList from './headlineList';
 
export class EverythingHeadlines extends React.Component{

render(){
    return(
        <section >
           <HeadlineList headlines={this.props.headlines}  folders={this.props.folders} />
        </section>
    )
}   
}


const mapStateToProps = state => {
    return {
        headlines: state.category.headlines,
        folders: state.protectedData.data
    };
};
export default connect(mapStateToProps)(EverythingHeadlines);