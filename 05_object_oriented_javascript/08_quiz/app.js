// Start the application with all the objects we've created

// Create questions
var myQuestions = [
	new Question("What is 2 + 2?", [4,8,10], 4),
	new Question("What is 4 + 4?", [4,8,10], 8),
	new Question("What is 5 + 5?", [4,8,10], 10),
	new Question("What is 26 + 4?", [4,8,10], 30),
]

// Create Quiz
var myQuiz = new Quiz(myQuestions);

quizElement = document.getElementById("quiz");
myQuiz.renderInHTML(quizElement);
