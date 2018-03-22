alert ('Hello' + ', Welcome to my page');

let answer = prompt ('what\'s yout age?');
if (answer < 18) {
	if (confirm ('Sure you want to check this out?') ){
		alert ('Okay, then welcome!');
	} else {
		alert ('See you');
	}
} else {
	alert ('Welcome');
}

