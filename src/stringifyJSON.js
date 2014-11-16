// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	var stringified = '';
	var search = function (obj) {
		if(typeof obj === 'number') stringified += '' + obj + '';
		else if(obj === null) stringified += 'null';
		else if(obj === true) stringified += 'true';
		else if(obj === false) stringified += 'false';
		else if(typeof obj === 'string') stringified += '"' + obj + '"';
		else if(Array.isArray(obj)) {
			stringified += '[';
			if(obj.length) {
				for(var x = 0; x < obj.length; x++) {
					if(x !== 0) {
						stringified += ',';
					}
					search(obj[x]);
				}
			}
			stringified += ']';
		} else if(typeof obj === 'object') {
			stringified += '{';
			var i = 0;
			for(var x in obj) {
				if(obj[x] === undefined || typeof obj[x] === 'function') continue;
				if(i !== 0) stringified += ',';
				stringified += '"' + x + '":';
				search(obj[x]);
				i++;
			}
			stringified += '}';
		} else if(obj === undefined || typeof obj === 'function') {
			stringified += '';
		}
	};

	search(obj);

	return stringified;

};
