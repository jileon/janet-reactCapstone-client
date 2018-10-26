import React from 'react';
import SideNav from './side-nav';
import HeaderBar from './header-bar';
import SideMenu from './side-menu';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../components/css/folder-lists.css';
import { getArticlesPerFolder } from '../actions/folder-actions';
import { deleteArticle } from '../actions/folder-actions';
import requiresLogin from './requires-login';
import FolderCurrentList from './folder-current-list';
import './css/headlines.css';
// import {fetchProtectedData} from '../actions/protected-data';

class FolderReadView extends React.Component {
	//TODO: Check if not including component did Mount creates any bugs
	//Maybe create function that queries the state? or add a loading spinner
	componentDidMount() {
		this.props.dispatch(getArticlesPerFolder(this.props.match.params.id));
	}

	render() {
		// console.log(this.props.currentarticles)
		if (this.props.currentarticles.length < 1) {
			return (
				<section>
					<SideMenu />

					<HeaderBar
						headerClass={this.props.expandedNav ? 'content-header-reduced ' : 'content-header-expanded'}
					/>
					<section className="render-folder-lists">
						<h1>I'm empty. Feed me articles.</h1>
					</section>
				</section>
			);
		}

		if (this.props.currentarticles.length >= 1) {
			return (
				<section>
					<SideMenu />

					<HeaderBar
						headerClass={this.props.expandedNav ? 'content-header-reduced ' : 'content-header-expanded'}
					/>

					<section className="searchHeader">
						<h2>Folder: {this.props.folder} </h2>
					</section>
					<section className="render-folder-lists">
						<FolderCurrentList
							deleteClick={(e) => {
								const folderid = this.props.match.params.id;
								const articleid = e.target.getAttribute('articleid');
								this.props.dispatch(deleteArticle(folderid, articleid));
							}}
							articles={this.props.currentarticles}
						/>
					</section>
				</section>
			);
		}

		return (
			<section>
				<SideMenu />

				<HeaderBar
					headerClass={this.props.expandedNav ? 'content-header-reduced ' : 'content-header-expanded'}
				/>

				<section className="searchHeader">
					<h2>Folder: {this.props.folder} </h2>
				</section>
				<section className="render-folder-lists">
					<FolderCurrentList
						deleteClick={(e) => {
							const folderid = this.props.match.params.id;
							const articleid = e.target.getAttribute('articleid');
							this.props.dispatch(deleteArticle(folderid, articleid));
						}}
						articles={this.props.currentarticles}
					/>
				</section>
			</section>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		currentarticles: state.protectedData.currentFolderArticles,
		folder: state.protectedData.currentFolder
	};
};

export default requiresLogin()(connect(mapStateToProps)(FolderReadView));
