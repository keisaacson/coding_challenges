var parentheses = function(string) {
	var open = 0;
	var closed = 0;
	for (var i = 0; i < string.length; i++) {
		if (closed > open) {
			return 'NO'
		} else if (string[i] == '(') {
			open++;
		} else if (string[i] == ')'){
			closed++;
		};
	};
	if (open == closed) {
		return 'YES'
	} else {
		return 'NO'
	};
}