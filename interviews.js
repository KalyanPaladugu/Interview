find indexex of duplicate elements

function find(needle, haystack) {
    var results = [];
    var idx = haystack.indexOf(needle);
    while (idx != -1) {
        results.push(idx);
        idx = haystack.indexOf(needle, idx + 1);
    }
    return results;
}


Remove empty value from array
var array = [0, 1, null, 2, "", 3, undefined, 3,,,,,, 4,, 4,, 5,, 6,,,,];

var filtered = array.filter(function (el) {
  return el != null;
});

console.log(filtered);


//convert object values in array
let d={
  x:1,
  y:2
}

let list= Object.keys(d)
console.log(list)

// Sorting array elements

let a=[1,2,13,4]
let b=[2,3,4,5,6,7]

const c=[a,b]
console.log(c.flat().sort((a,b)=> b-a))


add(1,2)
add(1)(2)

function add(a,b){
  if( a &&b){
    return a+b
  }
  else {
    return function (b){
      return a+b
    }
  }
  
}


console.log(add(1)(2))
