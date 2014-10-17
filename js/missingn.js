var findMissingNum = function(array) {
	var arr = array.sort();
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] - arr[i-1] !== 1) {
			console.log(arr[i] - 1);
		};
	};
};