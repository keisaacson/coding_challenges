var alphabet = function(alph, str) {
	var alphaArray = alph.toLowerCase().split('');
	var arr = str.toLowerCase().split('');
	var result = {};
	for (var i = 0; i < arr.length; i++) {
		if (alphaArray.indexOf(arr[i]) !== -1 && result[arr[i]]) {
			result[arr[i]]++;
		} else if (alphaArray.indexOf(arr[i]) !== -1){
		    result[arr[i]] = 1;
		}; 
	};
	var resultArray = [];
	for (var i = 0; i < alphaArray.length; i++) {
		if (result[alphaArray[i]]) {
		    resultArray.push(alphaArray[i] + ':' + result[alphaArray[i]]);
		};
	};
	if (resultArray.length === 0) {
		console.log("no matches");
	} else {
		console.log(resultArray.join(','));
	};
};