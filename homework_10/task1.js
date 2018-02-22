function debounce(callback, delay) {
	let timeout = null;
	return () => {
		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(() => {
			timeout = null;
			callback();
		}, delay);
	};
}

let iterator = 0;

function increaseIteratorBy1() {
	iterator++;

	printIteratorValue();
}

function printIteratorValue() {
	console.log("Iterator value ", iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
