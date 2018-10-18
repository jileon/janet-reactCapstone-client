import React from 'react';
import SideNav from './side-nav';
import HeaderBar from './header-bar';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../components/css/folder-lists.css'

class FolderReadView extends React.Component {
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

