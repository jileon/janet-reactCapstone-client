import React from 'react';

export default function BurgerButton(props) {
	return (
		<div className="burger-container" onClick={props.onClick}>
			<div className="bar1" />
			<div className="bar2" />
			<div className="bar3" />
		</div>
	);
}
