// A quiz is a collection of questions
function Quiz(questions) {
	this.questions = questions;
	this.questionIndex = 0;
	this.score = 0;
	this.container;
}

// Submit Answer
Quiz.prototype.submitAnswer = function() {
	
		// Check the answer
		var currentQuestion = this.questions[this.questionIndex];
		var answer = document.querySelector('input[type="radio"]:checked').value;
		var isCorrect = currentQuestion.checkUserAnswer(answer);
		
		// Change score if answer is correct
		if(isCorrect) {
			this.score+=1;
		}
		
		// If not on last page, go to the next question
		if( this.questionIndex < this.questions.length - 1 ) {
			this.questionIndex++;
			this.showQuestion()
		} else {
			// else show the score
			this.showScore();
		}	
	
}

// Display Question
Quiz.prototype.showQuestion = function() {
	var question = this.questions[this.questionIndex];
	var choices = question.choices
	
	// Build question html
	var questionHTML = '<h2 id="question" class="headline-secondary--grouped">';
	questionHTML += question.text + '</h2>';
	
	// Loop through choices
  for(var i = 0; i < choices.length; i++) {
  	questionHTML += '<input type="radio" name="question' + this.questionIndex + '" value="' + choices[i]  + '"> ' + choices[i] + '<br>';  
  }
  
  // update quiz progress
  var questionNumber = this.questionIndex + 1;
	document.getElementById("progress-current-question").innerHTML = questionNumber;
  
  var questionsContainer = document.getElementById("quiz-questions");
  questionsContainer.innerHTML = questionHTML;
  
}

// Show Score
Quiz.prototype.showScore = function() {
	this.container.innerHTML = '<h1>Awesome Quiz</h1><h3 id="score">Final Score is: ' + this.score + '</h3>';
}

// Render quiz in html
Quiz.prototype.renderInHTML = function(element) {
	this.container = element;
	
	var quizHTML = '<h1>My Awesome Quiz</h1>';
	quizHTML += '<div id="quiz-questions"></div>';
	quizHTML += '<button id="btn-submit-answer" class="btn--default">Submit</button>';
	quizHTML +='<footer><p id="progress">Question <span id="progress-current-question"></span> of <span id="progress-quiz-length">' + this.questions.length + '</span></p></footer>';
	this.container.innerHTML = quizHTML;
	
	// Add event handler
	var submitButton = document.getElementById("btn-submit-answer");
	submitButton.onclick = this.submitAnswer.bind(this); // bind this to the event handler
		
	this.showQuestion();
}