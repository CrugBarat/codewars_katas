// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function times(diff, arr) {
  if (diff > 0) {
    arr.push(0);
    diff -= 1;
    times(diff, arr);
  }
}

let moveZeros = (arr) => {
  const removingZeros = arr.filter(x => x !== 0);
  const diff = arr.length - removingZeros.length
  times(diff, removingZeros)
  return removingZeros
}

moveZeros([false,1,0,1,2,0,1,3,"a"])

module.exports = moveZeros;
