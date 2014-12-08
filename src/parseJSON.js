// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
<<<<<<< HEAD
	var result;
	// parse(json);
	return result;
=======
  // your code goes here

  // this is evil!!
  // Please don't use this until you've fixed it. DEFINITELY don't let unsanitized code use this.
  return eval('(' + json + ')');
>>>>>>> 07fc71858c2cb7541d8265e131fc35b0085c664a
};
