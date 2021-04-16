document.getElementById("goBtn").addEventListener('click', function() {
	prineFinder()
})


function prineFinder(x) {
	// Storing inner value of textbox into a varible
	// Creating enmpty array
	let number = document.getElementsByTagName("INPUT")[0].value;
	let primeArray = [];


	// Start off by making each index of the array true (true corrosponds to a prime number)
	for(let i = 0; i < 100; i++) {
		i < 2 ? primeArray[i] = false : primeArray[i] = true;
	}


	// Ultimately, loop through the array and for every iteration, test the current number against all previous numbers (via inner loop) to see if the current is prime
	// For numbers that are not prime, FALSE will be in that index of the arrar. For numbers that are prime, TRUE will be there.
	for(let x = 3; x <= 100; x++) {
		for(let y = 2; y < x; y++) {
			if(x % y == 0) {              //This is the test; if earlier numbers are divisible by the current, it's not a prime number
				primeArray[x] = false; 
				break;                   // Have to break loop, otherwise it will continue even when a number is divisible by current 
			} 
		}
	}


	// The number that the user enters is used as an index of the array, to see if there is TRUE or FALSE in that index.

	if(primeArray[number] == undefined) {
		alert(`Sorry, the number you have entered is out of range \nPlease enter a number between 1 andd 100.`)
	} else if(primeArray[number] == true) {
		alert(`${number.toString()} is a prime number!`)
	} else {
		alert(`${number.toString()} is NOT a prime number!`)
	}



}