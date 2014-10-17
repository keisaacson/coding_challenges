var fizzbuzz = function(num) {
	fizzbuzzArray = [];
	for (var i = 1; i <= num; i++) {
		if ((i % 3 == 0) && (i % 5 == 0)) {
			fizzbuzzArray.push('fizzbuzz');
		} else if (i % 3 == 0) {
			fizzbuzzArray.push('fizz');
		} else if (i % 5 == 0) {
			fizzbuzzArray.push('buzz');
		} else {
			fizzbuzzArray.push(i);
		}
	};
	return fizzbuzzArray;
}