// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className){
	var matches = [],
		search = function (element) {
			element = element || document.body;

			if(element.classList && Array.prototype.indexOf.call(element.classList, className) !== -1) {
				matches.push(element);
			}

			if(element.childNodes.length) {
				for (var x = 0; x < element.childNodes.length; x++) {
					search(element.childNodes[x]);
				}
			}

		};
	search();
	return matches;
};
