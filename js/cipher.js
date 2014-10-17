function cipher (alpha, offset, message, command) {
	alpha = alpha.split('');
	if(command === 'decode') {offset = offset * -1};
	var indexArray = [];
	for (var i = 0; i < message.length; i++) {
		var index = alpha.indexOf(message[i]);
		var newIndex = index + offset;
		if (index === -1) {
			indexArray.push(message[i]);
		} else if (Number.isInteger(newIndex)) {
			while (newIndex >= alpha.length) {
				newIndex = newIndex - alpha.length;
			};
			while (newIndex < 0) {
				newIndex = newIndex + alpha.length;
			};
			indexArray[i] = alpha[newIndex]
		};
	};
	console.log(indexArray.join(''));
}

// FOURTH SOLUTION
// 
// function cipher (alpha, offset, message, command) {
// 	alpha = alpha.split('');
// 	if(command === 'decode') {offset = offset * -1};
// 	var indexArray = [];
// 	for (var i = 0; i < message.length; i++) {
// 		var index = alpha.indexOf(message[i]);
// 		var newIndex = index + offset;
// 		if (index === -1) {
// 			indexArray.push(message[i]);
// 		} else if (Number.isInteger(newIndex)) {
// 			while (newIndex >= alpha.length) {
// 				newIndex = newIndex - alpha.length;
// 			};
// 			while (newIndex < 0) {
// 				newIndex = newIndex + alpha.length;
// 			};
// 			indexArray[i] = alpha[newIndex]
// 		};
// 	};
// 	console.log(indexArray.join(''));
// }

// THIRD SOLUTION
// 
// function cipher (alpha, offset, message, command) {
// 	alpha = alpha.split('');
// 	if(command === 'decode') {offset = offset * -1};
// 	var indexArray = [];
// 	for (var i = 0; i < message.length; i++) {
// 		var index = alpha.indexOf(message[i]);
// 		var newIndex = index + offset;
// 		if (index === -1) {
// 			indexArray.push(message[i]);
// 		} else if (newIndex >= 0) {
// 			while (newIndex >= alpha.length) {
// 				newIndex = newIndex - alpha.length;
// 			};
// 			indexArray[i] = alpha[newIndex]
// 		} else if (newIndex < 0) {
// 			while (newIndex < 0) {
// 				newIndex = newIndex + alpha.length;
// 			};
// 			indexArray[i] = alpha[newIndex]
// 		};
// 	};
// 	console.log(indexArray.join(''));
// }

// SECOND SOLUTION
// 
// function cipher (alpha, offset, message, command) {
// 	alpha = alpha.split('');
// 	if(command === 'decode') {offset = offset * -1};
// 	var indexArray = [];
// 	for (var i = 0; i < message.length; i++) {
// 		var index = alpha.indexOf(message[i]);
// 		if (index === -1) {
// 			indexArray.push(message[i]);
// 		} else {
// 			var newIndex = index + offset;
// 			if (newIndex >= 0) {
// 				while (newIndex >= alpha.length) {
// 					newIndex = newIndex - alpha.length;
// 				};
// 				indexArray[i] = alpha[newIndex]
// 			} else if (newIndex < 0) {
// 				while (newIndex < 0) {
// 					newIndex = newIndex + alpha.length;
// 				};
// 				indexArray[i] = alpha[newIndex]
// 			};
// 		};
// 	};
// 	console.log(indexArray.join(''));
// }

// FIRST SOLUTION
// 
// function cipher (alpha, offset, message, command) {
// 	alpha = alpha.split('');
// 	if(command === 'decode') {offset = offset * -1};
// 	var indexArray = [];
// 	for (var i = 0; i < message.length; i++) {
// 		var index = alpha.indexOf(message[i]);
// 		if (index !== -1) {
// 			var newIndex = index + offset;
// 			indexArray.push(newIndex);
// 		} else {
// 			indexArray.push(message[i]);
// 		};
// 	};
// 	for (var i = 0; i < indexArray.length; i++) {
// 		var newInt = parseInt(indexArray[i]);
// 		if (newInt >= 0) {
// 			while (newInt >= alpha.length) {
// 				newInt = newInt - alpha.length;
// 			};
// 			indexArray[i] = alpha[newInt]
// 		} else if (newInt < 0) {
// 			while (newInt < 0) {
// 				newInt = newInt + alpha.length;
// 			};
// 			indexArray[i] = alpha[newInt]
// 		};
// 	};
// 	console.log(indexArray.join(''));
// }