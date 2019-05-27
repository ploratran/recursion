// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  var str = '';

  //when obj is a num or boolean
  if (typeof obj === 'number'|| typeof obj === 'boolean'){
    //simply add '';
    str += obj;
  }

  // expected null to equal 'null'
  if (obj === null){
    return "null";
  }

  //when obj is string: expected '' to equal '"Hello world"' with " Ha "
  if (typeof obj === 'string'){
    obj = '"' + obj + '"';
    str += obj;
  }

  //when its an array of length 0 expected '{}' to equal '[]'
  if (Array.isArray(obj) && obj.length === 0){
    return str+= '[]';
  }

  //an array with more than 1 element
  if (Array.isArray(obj) && obj.length > 0){
    var res = []

    obj.forEach(element => {
      //recursion to stringify each element
      res.push(stringifyJSON(element));
    });
    // expected '' to equal '[8]'
    return str += '[' + res.join(',') + ']';
  }

  //when it's an object
  if (typeof obj === 'object'){

    for (var key in obj){
      //if value is undefined or a function
      if(obj[key] !== undefined && typeof obj[key] !== 'function'){
        //recursion to stringify key and value
        str += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
    return '{' + str.slice(0,str.length-1) + '}';
  }

  return str;

};
