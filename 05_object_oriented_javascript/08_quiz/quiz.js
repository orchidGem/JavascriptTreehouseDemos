// A quiz is a collection of questions
function Quiz() {
	this.questions = [];
	this.questionIndex = 0;
	this.score = 0;
	this.container;
}

// Add question to Quiz
Quiz.prototype.add = function(question) {
	this.questions.push(question);
}

// Submit Answer
Quiz.prototype.submitAnswer = function(answer, element) {

	// Check the answer
	var currentQuestion = this.questions[this.questionIndex];
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
	var questionHTML = '<h1>Awesome Quiz</h1>';
	questionHTML += '<h2 id="question" class="headline-secondary--grouped">';
	questionHTML += question.text + '</h2>';
	
	// Loop through choices
  for(var i = 0; i < choices.length; i++) {
  	questionHTML += '<p id="choice' + i + '">' + choices[i] + '</p>'; 
  	questionHTML += '<button id="guess' + i + '" class="btn--default btn-submit-answer">Select Answer</button>'; 	
  }
  
  var questionNumber = this.questionIndex + 1;
  questionHTML += '<footer><p id="progress">Question ' + questionNumber + ' of ' + this.questions.length + '</p></footer>';
  
  this.container.innerHTML = questionHTML;
  
	var submitButtons = document.getElementsByClassName("btn-submit-answer");
	
	for(var i=0; i<submitButtons.length; i++) {
		submitButtons[i].addEventListener('click', function(){
			myQuiz.submitAnswer();
		});
	}
}

// Show Score
Quiz.prototype.showScore = function() {
	this.container.innerHTML = '<h1>Awesome Quiz</h1><h3 id="score">Final Score is: ' + this.score + '</h3>';
}

// Render quiz in html
Quiz.prototype.renderInHTML = function(element) {
	this.container = element;
	this.showQuestion();
}