// Write a function that will take in any array and reverse it.
//
// Sounds simple doesn't it?
//
// NOTES:
//
// Array should be reversed in place! (no need to return it)
// Usual builtins have been deactivated. Don't count on them.
// You'll have to do it fast enough, so think about performances

let reverse = (arr) => {
   let res = [];
   for(i=arr.length-1; i>=0; i--) {
     res.push(arr[i]);
   }
   return res;
}

reverse([1,2,3,4,5])

module.exports = reverse;
