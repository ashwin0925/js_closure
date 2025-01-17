// Challenge 1
function addTwo(num) {
  return num+2
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return word+'s'
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
  var newarr = [];
  array.forEach(n => {
      newarr.push(callback(n))
  })
  return newarr;
}

console.log(map([1, 2, 3], addTwo));// -> [3,4,5]

// Challenge 4
function forEach(array, callback) {
  for(let i =0; i<array.length; i++){
      callback(array[i])
  }
}
// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  var newarr = [];
  array.forEach(n => {
  newarr.push(callback(n))
  })
  return newarr;
  }

  function callback(n) {
      return n * 2;
      }

 mapWith([1,3,5,7,9],callback)

//Extension 2
function reduce(array, callback, initialValue) {
let acc = initialValue;
let cv;
for(let i = 0;i<array.length;i++)
  {
  cv =array[i];
  acc= callback(acc,cv);		
}
return acc;
}

var nums = [4, 1, 3];
var add = function(a, b) { return a + b; }
reduce(nums, add, 0); 

//Extension 3
function intersection(...arrays){
  return arrays.reduce((acc,cv) =>{
  return acc.filter(value => cv.includes(value))
  })
}
// function intersection(array1,array2,array3) {
//     var a =array1.filter(value => array2.includes(value))
//     return a.filter(value => array3.includes(value))
//     }

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arrays){
return arrays.reduce((acc,cv) =>{
cv.filter(v => !acc.includes(v)?acc.push(v):acc);
return acc;
})
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  let object = {}
  for (let i = 0; i < array1.length; i++) {
    if (callback(array1[i]) === callback(array2[i])) {
      object[array1[i]] = array2[i]
    }
  }
  return object
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
  return arrVals.reduce((acc,cv)=> {
    arrCallbacks.reduce((a,c) => {
    a.push(c(cv));
    acc[cv] = a;
    return a;
    },[]);
	return acc;
  },{})
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
