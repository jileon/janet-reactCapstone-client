import React from 'react';
import SideNav from './side-nav';
import HeaderBar from './header-bar';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../components/css/folder-lists.css';
import {getArticlesPerFolder} from '../actions/folder-actions';
import {deleteArticle} from '../actions/folder-actions';
import FolderCurrentList from './folder-current-list';
// import {fetchProtectedData} from '../actions/protected-data';

class FolderReadView extends React.Component {
//TODO: Check if not including component did Mount creates any bugs
//Maybe create function that queries the state? or add a loading spinner
    componentDidMount(){
        this.props.dispatch(getArticlesPerFolder(this.props.match.params.id));
      }

	render() {
        // console.log(this.props.currentarticles)
        return(
            <section>
                <Link to='/usermenu'>
                  <SideNav/>
                  </Link>
                  <HeaderBar/>
                  <section className="render-folder-lists">
                    <FolderCurrentList 
                    deleteClick={(e)=>{
                        const folderid=this.props.match.params.id;
                        const articleid= e.target.getAttribute('articleid');
                        console.log('delete works');
                        console.log(folderid);
                        console.log(articleid);
                        this.props.dispatch(deleteArticle(folderid,articleid));
                    }}
                    articles={this.props.currentarticles}/>
                  </section>
            <h1>hello</h1>
            </section>
                );	
}
}
const mapStateToProps = (state) => {
	return {
		currentarticles: state.protectedData.currentFolderArticles     
	};
};

export default connect(mapStateToProps)(FolderReadView);

