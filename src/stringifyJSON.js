// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var result;                         // used as array to hold more complex values
  var type = typeof obj;

  if (obj === null) {
    return 'null';
  }

  if (type === 'undefined') {
    return undefined;
  }

  if (type === 'string') {
    return '"' + obj.toString() + '"';
  }

  if (type === 'number' || type === 'boolean') {
    return obj.toString();
  }

  if (Array.isArray(obj)) {
    result = [];
    for (var i = 0; i < obj.length;i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return "[" + result.join() + "]";
  }

  if (type === 'object') {
    result = [];
    for (var key in obj) {
      var stringified = stringifyJSON(obj[key]);
      if (stringified) {
        result.push('"' + key + '":' + stringified);
      }
    }
    return "{" + result.join() + "}";
  }

  if (type === 'function') {
    return undefined;
  }

};
