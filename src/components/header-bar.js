import React from 'react';
import { Link } from 'react-router-dom';
import './css/header-bar.css';


export default function HeaderBar(props) {
	return (
		<header className={props.headerClass}>
			<Link to="/news">
				<h1 className="header-title">News Flash.</h1>
			</Link>
		</header>
	);
}
