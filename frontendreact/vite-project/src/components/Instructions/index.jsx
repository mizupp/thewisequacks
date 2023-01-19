import React from "react"

const Instructions = () => {
	return (
		<div role="Instructions">
			<h1>Instructions</h1>
			<p>
				You will be shown 18 tiles with questions behind them. You want to answer as many questions in the time limit, you can 
				see how much time is left by looking at the progress bar at the top of the screen.
			</p>
			<p>
				The tiles will be arranged in 3 rows and 6 columns. The cards will show what category and difficulty the question is.
			</p>
			<p>
				Click on a tile to reveal the question. You will have 3 seconds to read
				the question before the answers appear.
			</p>
			<p>
				You want to select the correct answer as quickly as possible. If you want to get the most points! 
				However if you select the wrong answer or take too long to answer the question, you will recieve zero points.
			</p>
			<p>
				You can see how many points you have by looking at the score at the top of the screen.
			</p>
			<p>
				The person with the most points at the end of the game will be the winner.
			</p>
		</div>
	)
}

export default Instructions
