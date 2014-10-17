var sequence = function(array) {
	var sequenceLength = 1;
	var sequenceLengths = [];
	for (var i = 1; i < array.length; i++) {
		if (array[i]-array[i-1] >= 0) {
			sequenceLength++;
		} else {
			sequenceLengths.push(sequenceLength);
			sequenceLength = 1;
		};
	};
	return Math.max.apply(null, sequenceLengths);
};