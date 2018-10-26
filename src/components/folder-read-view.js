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
import './css/folder-lists.css';
class FolderReadView extends React.Component {

	componentDidMount() {
		this.props.dispatch(getArticlesPerFolder(this.props.match.params.id));
	}

	render() {
		if (this.props.currentarticles.length < 1) {
			return (
				<section>
					<SideMenu />

					<HeaderBar headerClass={this.props.expandedNav ? 'content-header-reduced ' : 'content-header-expanded'}
					/>
					<section className={this.props.expandedNav ? 'folder-header-reduced ' : 'folder-header-expanded'}>
						<h2><span className='imEmpty'>{this.props.folder}: <br/><br/>I'm empty. Feed me articles.</span> </h2>
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

					<section className={this.props.expandedNav ? 'folder-header-reduced ' : 'folder-header-expanded'}>
						<h2><span>{this.props.folder}</span> </h2>
					</section>
					<section className={this.props.expandedNav ? 'folder-section-reduced ' : 'folder-section-expanded'}>
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


					<section className={this.props.expandedNav ? 'folder-header-reduced ' : 'folder-header-expanded'}>
						<h2><span>{this.props.folder}</span> </h2>
					</section>
					<section className={this.props.expandedNav ? 'folder-section-reduced ' : 'folder-section-expanded'}>
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
        folder: state.protectedData.currentFolder,
        expandedNav: state.nav.expandedNav
	};
};

export default requiresLogin()(connect(mapStateToProps)(FolderReadView));
