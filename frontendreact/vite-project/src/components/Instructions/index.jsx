import React from "react"

const Instructions = () => {
	return (
		<div role="Instructions">
			<h1>Instructions</h1>
			<p>You will be shown x number of tiles with questions behind them.</p>
			<p>
				The tiles will be arranged in 5 rows and 4 columns. The rows represent
				difficulty level and the columns show the categories.
			</p>
			<p>
				Click on a tile to reveal the question. You will have 5 seconds to read
				the question before the answers appear.
			</p>
			<p>
				You will have x seconds to click on the correct answer but remember this
				is a game of speed to try and click the correct answer as quickly as
				possible.
			</p>
			<p>
				The person who chooses the correct answer first will recieve all the
				points, second will recieve 50%, third will recieve 20% and 4th will
				recieve 10%. SO BE QUICK!
			</p>
			<p>
				Once all the tiles have been revealed the game will end and the scores
				will be displayed.
			</p>
		</div>
	)
}

export default Instructions
