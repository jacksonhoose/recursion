// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className, node){
  var results = [];
  node = node || document.body;

  var list = node.className ? node.className.split(' ') : [];
  if(list.indexOf(className) >= 0) {
    results.push(node);
  }

  if(node.hasChildNodes()) {
    for(var x = 0; x < node.childNodes.length; x++) {
      var temp = getElementsByClassName(className, node.childNodes[x]);
      results = results.concat(temp);
    }
  }

  return results;

};
