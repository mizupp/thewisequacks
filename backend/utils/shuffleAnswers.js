const addShuffled = (data) => {
	const shuffled = data.map((question) => {
		const incorrect = question.incorrectAnswers.map((a) => ({
			text: a,
			isCorrect: false,
		}))
		const correct = { text: question.correctAnswer, isCorrect: true }
		const answers = [...incorrect, correct]
		const shuffled = answers.sort(() => Math.random() - 0.5)
		return { ...question, answers: shuffled }
	})
	return shuffled
}

module.exports = {
	addShuffled,
}
