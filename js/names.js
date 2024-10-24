function formatNames(){
	'use strict';
	var formattedName;
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	
	formattedName = lastName + ', ' + firstName;
	
	document.getElementById('result').value = formattedName;
	return false;
} // End of formatNames() function.

function init(){
	'use strict';
	
	document.getElementById('calcForm').onsubmit = formatNames;
	// Changed the provided HTML form ID from 'theForm' to 'calcForm'

} // End of init() function.

window.onload = init;