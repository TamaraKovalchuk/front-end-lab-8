var a = Number(prompt("enter first side of a triangle"));
var b = Number(prompt("enter second side of a triangle"));
var c = Number(prompt("enter third side of a triangle"));

var type3;
if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
	if (a > 0 && b > 0 && c > 0) {
		var x = a == b;
		var y = b == c;
		if (x && y) {
			type3 = "equilateral";
		} else {
			if (
				(a > b &&
					a > c &&
					Math.pow(a, 2) == Math.pow(b, 2) + Math.pow(c, 2)) ||
				(b > a &&
					b > c &&
					Math.pow(b, 2) == Math.pow(a, 2) + Math.pow(c, 2)) ||
				(c > a &&
					c > b &&
					Math.pow(c, 2) == Math.pow(a, 2) + Math.pow(b, 2))
			) {
				type3 = "right triangle";
			} else if (x || y) {
				type3 = "isosceles";
			} else {
				type3 = "scalene";
			}

			var p, s;

			p = (a + b + c) / 2;
			s = Number(Math.sqrt(p * (p - a) * (p - b) * (p - c)));
			if (!isNaN(s) && s > 0) {
				console.log(
					"Type of triangle is " +
						type3 +
						" and square is " +
						s.toFixed(2)
				);
			} else {
				console.log("Incorrect data");
			}
		}
	} else {
		console.log("Incorrect data");
	}
} else {
	console.log("Incorrect data");
}
