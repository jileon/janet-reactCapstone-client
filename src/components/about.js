import React from 'react';

export default function About(props) {
	return (
		<section className="about-newsflash">
			<h1>About News flash</h1>
			<p>
				News flash is a way to save and get updated news for topics that interest you. You can browse headlines by
				category using the buttons at the top navigation.
			</p>
			<p>
				You can save an article by creating customized folders. To create a new folder, click on the side
				navigation bar to open the folder display menu. Create a new folder by typing a name in the input and press
				enter. Go back to the main page, hover over an article you'd like to save, and you will see a button pop
				up called 'Add to Folder'. Hover over that button to see a drop down menu of all your folders.
			</p>

			<p>
				To view what's in your folders, click on the side navigation bar. You can see a card view list of all
				your folders. Click on each folder to open up a page with every article saved to that folder. When you
				decide you no longer need that article, delete it by hovering over the article card and click the delete
				button at the top.
			</p>

            	<div className="modal-close">
							<button onClick={props.ModalOff}>
								Got It
							</button>
                            </div>
		</section>
	);
}
