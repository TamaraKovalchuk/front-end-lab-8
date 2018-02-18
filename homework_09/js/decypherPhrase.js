function decypherPhrase(object, string) {
	var newObj = new Object();
	for (var prop in object) {
		newObj[object[prop]] = prop;
	}
	return cypherPhrase(newObj, string);
}
