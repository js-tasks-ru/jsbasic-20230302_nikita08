function getMinMax(str) {
	let newStr = str.split(/\s*,| \s*/);
    
	newStr.sort( (a, b) => a - b );
	
	let result = {
      min: +newStr[0],
      max: +newStr[newStr.length - 1],
	};

	return result;
}
