function reverseNumber(n) {
	var reversed = String(Math.abs(n))
		.split("")
		.reverse()
		.join("");
	reversed = Number(reversed) * Math.sign(n);
	return reversed;
}
