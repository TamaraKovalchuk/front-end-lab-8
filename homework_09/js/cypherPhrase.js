function cypherPhrase(object, string) {
	var newArray = getTransformedArray(string, function(el) {
		return object[el] || el;
	});
	return newArray.join("");
}
