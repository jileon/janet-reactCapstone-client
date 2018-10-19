import React from 'react';
import SideNav from './side-nav';
import HeaderBar from './header-bar';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../components/css/folder-lists.css';
import {getArticlesPerFolder} from '../actions/folder-actions';
// import {fetchProtectedData} from '../actions/protected-data';

class FolderReadView extends React.Component {

    componentDidMount(){
        this.props.dispatch(getArticlesPerFolder(this.props.match.params.id));
        console.log(this.props.match.params.id)
      }

    //   componentDidUpdate(){
    //     this.props.dispatch(fetchProtectedData());
    //   }
	render() {

        return(
            <section>
                <Link to='/usermenu'>
                  <SideNav/>
                  </Link>
                  <HeaderBar/>
                  <section className="render-folder-lists">
                 Hello
                  </section>
            
            </section>
                );	
}
}
const mapStateToProps = (state) => {
	return {
		myfolders: state.protectedData.data,      
	};
};

export default connect(mapStateToProps)(FolderReadView);

