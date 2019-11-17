// Script 10.7- register.js
// This script validates a form.

// Function called when the form is submitted.
// Function validates the form data.
function validateForm(e) {
    'use strict';

    // Get the event object:
	if (typeof e == 'undefined') e = window.event;

    // Get form references:
	var firstName = U.$('firstName');
	var lastName = U.$('lastName');
	var email = U.$('email');
	var phone = U.$('phone');
	var city = U.$('city');
	var state = U.$('state');
	var zip = U.$('zip');
	var terms = U.$('terms');
	//var span = document.createElement('span');
	

	// Flag variable:
	var error = false;

	// Validate the first name:
	if (/^[A-Z \.\-']{2,20}$/i.test(firstName.value)) {
		removeErrorMessage('firstName');
		addCorrectMessage('firstName', 'Thank You');
	} else {
		removeCorrectMessage('firstName');
		addErrorMessage('firstName', 'Please enter your first name');
		error = true;
	}

	// NM added validate the last name:
	if (/^[A-Za-z \.\-']{2,40}$/.test(lastName.value)) {
		removeErrorMessage('lastName');
		addCorrectMessage ('lastName', 'Thank You');
	} else {
		removeCorrectMessage('lastName');
		addErrorMessage('lastName', 'Please enter your last name');
		error = true;
	}

	// Validate the email address:
	if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email.value)) {
		removeErrorMessage('email');
		addCorrectMessage ('email', 'Thank You');
	} else {
		removeCorrectMessage('email');
		addErrorMessage('email', 'Please enter your email address');
		error = true;
	}

	// Validate the phone number:
	if (/\d{3}[ \-\.]?\d{3}[ \-\.]?\d{4}/.test(phone.value)) {
		removeErrorMessage('phone');
		addCorrectMessage ('phone', 'Thank You');
	} else {
		removeCorrectMessage('phone');
		addErrorMessage('phone', 'Please enter your phone number');
		error = true;
	}

	// NM added validate the city:
	if (/^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']+$/.test(city.value)) {
		removeErrorMessage('city');
		addCorrectMessage ('city', 'Thank You');
	} else {
		removeCorrectMessage('city');
		addErrorMessage('city', 'Please enter your city');
		error = true;
	}

	// Validate the state:
	if (state.selectedIndex !== 0) {
		removeErrorMessage('state');
		addCorrectMessage ('state', 'Thank You');
	} else {
		removeCorrectMessage('state');
		addErrorMessage('state', 'Please select your state');
		error = true;
	}

	// Validate the zip code:
	if (/^\d{4}(-\d{4})?$/.test(zip.value)) {
		removeErrorMessage('zip');
		addCorrectMessage ('zip', 'Thank You');
	} else {
		removeCorrectMessage('zip');
		addErrorMessage('zip', 'Please enter your Post Code');
		error = true;
	}

    // If an error occurred, prevent the default behavior:
	if (error) {

		// Prevent the form's submission:
	    if (e.preventDefault) {
	        e.preventDefault();
	    } else {
	        e.returnValue = false;
	    }
	    return false;
    
	}
    
} // End of validateForm() function.

// Function called when the terms checkbox changes.
// Function enables and disables the submit button.
function toggleSubmit() {
	'use strict';
    
	// Get a reference to the submit button:
	var submit = U.$('submit');
	
	// Toggle its disabled property:
	if (U.$('terms').checked) {
		submit.disabled = false;
	} else {
		submit.disabled = true;
	}
	
} // End of toggleSubmit() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';

	// The validateForm() function handles the form:
    U.addEvent(U.$('theForm'), 'submit', validateForm);

	// Disable the submit button to start:
	U.$('submit').disabled = true;

	// Watch for changes on the terms checkbox:
    U.addEvent(U.$('terms'), 'change', toggleSubmit);

	// Enbable tooltips on the phone number:
	U.enableTooltips('phone');
    
};