function Question(text, choices, correctAnswer) {
	this.text = text;
	this.choices = choices;
	this.correctAnswer = correctAnswer;
}

Question.prototype.checkUserAnswer = function(userAnswer) {
	return this.correctAnswer === userAnswer;
}