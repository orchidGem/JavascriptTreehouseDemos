// Problem: hints are shown even when form is valid
// Solution: hide and show them at appropriate times

// Declare variables
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
var $submit = $("#submit");

// Hide the hints
$('form span').hide();

function isPasswordValid() {
	return $password.val().length > 8;
}

function arePasswordsMatching() {
	return $password.val() === $confirmPassword.val()
}

function canSubmit() {
	return isPasswordValid() && arePasswordsMatching();
}

function enableSubmitEvent() {
	$submit.prop("disabled", !canSubmit());
}

function passwordEvent() {
	if( isPasswordValid() ) {
		$password.next().hide();
	} else {
		$password.next().show();
	}
}

// When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
	
function confirmPasswordEvent() {
	if( arePasswordsMatching() ) {
		$confirmPassword.next().hide();
	} else {
		$confirmPassword.next().show();
	}
}

// When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();