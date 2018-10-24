import React from 'react';
import './css/header-bar.css';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { setCategory } from '../actions/category-action';

//TODO: fix onClick={()=>this.dispatch(setCategory('headlines'))}
export default function HeaderBarBlack(props) {
	return (
		<header className="content-header-black">
			<Link to="/dashboard">
				<h1 className="header-title-black">News Flash</h1>
			</Link>
		</header>
	);
}
