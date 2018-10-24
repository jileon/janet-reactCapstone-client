import React from 'react';
import './css/category-nav.css';

export default function CategoryNav(props) {
	return (
		<ul className="category-flex-container">
			<div>
				<li>
					<button className="catagory-nav" type="button" name="headlines" onClick={props.buttonClick}>
						Everything
					</button>
				</li>
				<li>
					<button className="catagory-nav" type="button" name="entertainment" onClick={props.buttonClick}>
						Entertainment
					</button>
				</li>
			</div>

			<div>
				<li>
					<button className="catagory-nav" type="button" name="business" onClick={props.buttonClick}>
						Business
					</button>
				</li>
				<li>
					<button className="catagory-nav" type="button" name="health" onClick={props.buttonClick}>
						Health
					</button>
				</li>
			</div>

			<div>
				<li>
					<button className="catagory-nav" type="button" name="science" onClick={props.buttonClick}>
						Science
					</button>
				</li>
				<li>
					<button className="catagory-nav" type="button" name="sports" onClick={props.buttonClick}>
						Sports
					</button>
				</li>
			</div>
			<li>
				<button className="catagory-nav" type="button" name="technology" onClick={props.buttonClick}>
					Technology
				</button>
			</li>
		</ul>
	);
}
