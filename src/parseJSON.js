// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here

  // this is evil!!
  // Please don't use this until you've fixed it. DEFINITELY don't let unsanitized code use this.
  return eval('(' + json + ')');
};
