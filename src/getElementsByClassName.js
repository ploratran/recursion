// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  //your code goes here
  var res = [];
  var findElementsWithClassName = function(element){
    //JS Element.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element.
    //contains( String ) - Checks if the specified class value exists in the element's class attribute.
    if(element.classList && element.classList.contains(className)){
      res.push(element);
    }
    //Node.childNodes read-only property returns a live NodeList of child nodes of the given element where the first child node is assigned index 0.
    //use recursion - check if classname has childnodes in the DOM then add to the res
    if(element.childNodes){
      for(var i = 0; i < element.childNodes.length; ++i){
        findElementsWithClassName(element.childNodes[i]);
      }
    }
   }
   //Use recursion to the body of the DOM
   //The Document.body property represents the <body> or <frameset> node of the current document, or null if no such element exists.
   findElementsWithClassName(document.body);
   return res;
};
