function highestFreq (str) {
  var strObj = {};
  var maxCount = 1;
  var max = [str[0]];
  for (var i = 0; i < str.length; i++) {
  	if (strObj[str[i]]) {
  		strObj[str[i]]++;
  	} else {
  		strObj[str[i]] = 1;
  	};
  	if (strObj[str[i]] > maxCount) {
  		maxCount = strObj[str[i]];
  		max = [str[i]];
	} else if (strObj[str[i]] === maxCount){
		max.push(str[i]);
	};
  };
  console.log(max.sort().join(''));
}

// FIRST SOLUTION

// function highestFreq (str) {
//   var strObj = {};
//   var maxCount = 1;
//   var max = [str[0]];
//   for (var i = 0; i < str.length; i++) {
//   	if (strObj[str[i]]) {
//   		strObj[str[i]]++;
//   	} else {
//   		strObj[str[i]] = 1;
//   	};
//   	if (strObj[str[i]] > maxCount) {
//   		maxCount = strObj[str[i]];
//   		max = [str[i]];
// 	} else if (strObj[str[i]] === maxCount){
// 		max.push(str[i]);
// 	};
//   };
//   console.log(max.sort().join(''));
// }