import React from 'react';

export default function BurgerButtonX(props) {
	return (
		<div class="burger-container" onClick={props.onClick}>
			<div class="bar4" />
			<div class="bar5" />
			<div class="bar6" />
		</div>
	);
}
