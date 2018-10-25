import React from 'react';
import BurgerButton from './burgerbutton';
import './css/side-nav.css';

export default function SideNav(props) {
	return (
		<nav className="side-nav" onClick={props.navClick}>
			<BurgerButton onClick={props.onClick} />
		</nav>
	);
}
