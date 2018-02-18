function getTransformedArray(array, func) {
	var newArray = [];
	forEach(array, function(el) {
		newArray.push(func(el));
	});
	return newArray;
}
