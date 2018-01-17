function characterPositioning (string) {
var array = string.replace(/ /g,'').toLowerCase().split("");
//console.log(array[0]);
var myObject = {};
for (var i = 0; i < array.length; i++) {
  //console.log(array[i]);
  //console.log(cur);
  var cur = array[i];
  myObject[cur] = [];
}

 // for (var i = 0; i < array.length; i++) {
 //     myObject[array[i]] = myObject[array[i]]+1;
  // }
for (var i = 0; i < array.length; i++) {
 myObject[array[i]].push(i);
}


 return myObject;
}

console.log (characterPositioning("lighthouse in the house"));




//   var myObjectPlus = {
//   key: array,
// };




// array = [where located]]



// lighthouse in the house


// l: [0]
// i: [1,10]
// g: [2]
// h: [3,5, 13, 15]
// t: [4,12]
// o: [6,16]
// u: [7,17]
// s: [8,18]
// e: [9,19]
// n: [11]