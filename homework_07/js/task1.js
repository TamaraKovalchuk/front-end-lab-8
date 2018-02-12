var n = Number(prompt("enter natural number N (0<N<=20) "));
var b;
var spaceN = n - 1; 

if (!isNaN(n) && Number.isInteger(n) && n > 0 && n <= 20) {
	for (var i = 1; i <= n; i++) {
		var floor = ""; 
		var emptySpace = "";
		for (var j = 0; j < spaceN - i + 1; j++) {
			emptySpace = "   " + emptySpace;
		}
		floor = emptySpace;
		var bi = 1 + (i - 1) * 2;
		for (var k = 0; k < bi; k++) {
			floor = floor + "[~]";
		}
		floor = floor + emptySpace;
		console.log(floor);
	}
} else {
	console.error("Incorrect!");
}
