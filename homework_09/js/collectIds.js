function collectIds(movies) {
	var filteredMovies = getFilteredArray(movies, function(el) {
		return el.rating > 3.0;
	});
	return getTransformedArray(filteredMovies, function(el) {
		return el.id;
	});
}
