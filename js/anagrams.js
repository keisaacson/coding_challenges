var isAnagram = function(a, b) {
  	var arrayA = a.replace(/\s+/g, '').toLowerCase().split('').sort();
	var arrayB = b.replace(/\s+/g, '').toLowerCase().split('').sort();
	if (arrayA.toString() === arrayB.toString()) {
		console.log("yes");
	} else {
		console.log("no");
	};
}