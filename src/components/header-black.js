import React from 'react';
import { Link } from 'react-router-dom';
import './css/header-bar.css';

export default function HeaderBarBlack(props) {
	return (
		<header role='banner' className="content-header-black">
			<Link to="/dashboard">
				<h1 className="header-title-black">News Flash<span className='period'>.</span></h1>
			</Link>
		</header>
	);
}
