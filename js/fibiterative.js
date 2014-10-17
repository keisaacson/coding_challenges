function iterativeFib (n) {
	var fib = 1;
	var fibPrev = 0;
	for (var i = 1; i < n; i++) {
		var newFib = fib + fibPrev;
		fibPrev = fib;
		fib = newFib;
	};
	console.log(fib);
};