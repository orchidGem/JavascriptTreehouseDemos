// Start the application with all the objects we've created

// Create Quiz
var myQuiz = new Quiz();

// Create questions
var question1 = new Question("What is 2 + 2?", [4,8,10], 4);
var question2 = new Question("What is 4 + 4?", [4,8,10], 8);
var question3 = new Question("What is 5 + 5?", [4,8,10], 10);
var question4 = new Question("What is 26 + 4?", [4,8,10], 30);

// Add questions to quiz
myQuiz.add(question1);
myQuiz.add(question2);
myQuiz.add(question3);
myQuiz.add(question4);

quizElement = document.getElementById("quiz");
myQuiz.renderInHTML(quizElement);
