import React from 'react';

export default function BurgerButton(props) {
	return (
		<div class="burger-container" onClick={props.onClick}>
			<div class="bar1" />
			<div class="bar2" />
			<div class="bar3" />
		</div>
	);
}
