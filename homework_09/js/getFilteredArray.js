function getFilteredArray(array, predicateFunction) {
	var newArray = [];
	forEach(array, function(el) {
		if (predicateFunction(el)) {
			newArray.push(el);
		}
	});
	return newArray;
}
