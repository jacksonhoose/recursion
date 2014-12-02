// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var resultElements = [];
  // if a second arg is provided we search that node and its children ... otherwise body is used
  var startNode = arguments[1] || document.body;

  if (hasClass(startNode, className)) {
    resultElements.push(startNode);
  }
  if (startNode.hasChildNodes()) {
    var childNodes = startNode.childNodes;
    for (var i = 0; i < childNodes.length; i++) {
      resultElements = resultElements.concat(getElementsByClassName(className, childNodes[i]));
    }
  }

  return resultElements;
};


// helper class to make getElementsByClassName more readable
var hasClass = function(element, className) {
  var classes = element.className || "";
  if (classes.indexOf(className) > -1) {
    return true;
  } else {
    return false;
  }
};
