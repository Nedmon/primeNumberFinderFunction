document.getElementById("goBtn").addEventListener('click', function() {
	prineFinder()
})


// This prime finder function uses a recursive function as opposed to an array and loops


function prineFinder(x) {
	// Storing inner value of textbox into a varible
	let userNumber = document.getElementsByTagName("INPUT")[0].value;
	let prime; // Global varible that can be accessed by inner functions


	function reCursive(x, y) {
    if(y < 2) {

    } else if (x % y == 0) {
        prime = false;
        return "z";     // If there is a division, the return statement will jump out of the function. "z" is just something to return
    } else {
        prime = true;
        reCursive(x, y - 1)
    }
}

function primeTeller(number) {
    reCursive(number, number -1) 
    if (prime == true) {
    	return `yes`;
    } else {
    	return `no`;
    }

}



	// The number that the user enters is used as an index of the array, to see if there is TRUE or FALSE in that index.

	alert(primeTeller(userNumber))



}