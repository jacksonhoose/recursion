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

function getElementsByClassName = function(className, node){
  node.LISTOFCHILDREN.reduce(function(sum, child){
    return sum.concat(getElementsByClassName(className, child));
  }, hasClass(node.classList, class) ? [node.elemet] : []);
  function hasClass(list, target){
    list.split(",").some(function(element){
      return element === target;
    })
  }
}

function Tree(value) {
  return {
    value : value,
    children : [];
  }
}


Tree.prototype.countLeaves = function(){
  return this.children.reduce(function(sum, child){
    return sum + child.countLeaves();
  }, this.children.length? 0 : 1);
}


function deepReverse(x){
  return Array.isArray(x) ?
  reverse(x.map(function(element){
    return deepReverse(element);
  })) :
  x
}
