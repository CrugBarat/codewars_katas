// Given the string representations of two integers, return the string representation of the sum of those integers.
//
// For example:
//
// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

let sumStrings = (a, b) => {
  let numA = a.split('');
  let arr1 = [];
  for (let i=0;i<numA.length;i++) {
    arr1.push(parseInt(numA[i]));
  }
  let numB = b.split('');
  let arr2 = [];
  for (let i=0;i<numB.length;i++) {
    arr2.push(parseInt(numB[i]));
  }
  let diff;
  if (arr1.length >= arr2.length) {
    diff = arr1.length - arr2.length;
  } else {
    diff = arr2.length - arr1.length;
  }
  let extra = [];
  for (let i=0;i<diff-1;i++) {
    if (arr1.length >= arr2.length){
      extra.push(arr1[i]); //slice
    } else {
      extra.push(arr2[i]);
    }
  }
  if (arr1.length >= arr2.length){
    arr1 = arr1.slice(diff-1, arr1.length-1);
  } else {
    arr2 = arr2.slice(diff-1, arr1.length-1);
  }
  console.log(arr1);
  console.log(arr2);
}

sumStrings('712569312664357328695151392', '8100824045303269669937')

module.exports = sumStrings;
