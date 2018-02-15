function getMin() {
	var minArg = arguments[0];
	for (var i = 1; i < arguments.length; i++) {
		minArg = Math.min(minArg, arguments[i]);
	}
	return minArg;
}
