import React from 'react';
import HeaderBar from './header-bar';
import SideMenu from './side-menu';
import { connect } from 'react-redux';
import { getArticlesPerFolder } from '../actions/folder-actions';
import { deleteArticle } from '../actions/folder-actions';
import requiresLogin from './requires-login';
import FolderCurrentList from './folder-current-list';
import './css/headlines.css';
import '../components/css/folder-lists.css';

class FolderReadView extends React.Component {

	componentDidMount() {
		this.props.dispatch(getArticlesPerFolder(this.props.match.params.id));
	}

	render() {
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
