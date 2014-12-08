// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	if(typeof obj === 'string') {
		return '"' + obj + '"';
	}
	if(Array.isArray(obj)) {
		var results = [];
		for(var x = 0; x < obj.length; x++) {
			var value = stringifyJSON(obj[x]);
			results.push(value);
		}
		return '[' + results.join(',') + ']';
	}
	if(obj && typeof obj === 'object') {
		var results = [];
		for (var key in obj) {
			if(obj[key] === undefined || typeof obj[key] === 'function') continue;
			results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
		}
		return '{' + results.join(',') + '}';
	}
	return '' + obj;
};
