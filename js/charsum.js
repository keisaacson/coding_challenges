function charSum (str) {
	var total = 0;
	for (var i = 0; i < str.length; i++) {
		if (parseInt(str[i])) {
			total += parseInt(str[i]);
		};
	};
	console.log(total.toString());
}