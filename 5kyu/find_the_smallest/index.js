// You have a positive number n consisting of digits. You can do at most one operation: Choosing the index of a digit in the number, remove this digit at that index and insert it back to another or at the same place in the number in order to find the smallest number you can get.

// #Task: Return an array or a tuple or a string depending on the language (see "Sample Tests") with

// 1) the smallest number you got
// 2) the index i of the digit d you took, i as small as possible
// 3) the index j (as small as possible) where you insert this digit d to have the smallest number.

// Example:
//
// smallest(261235) --> [126235, 2, 0] or (126235, 2, 0) or "126235, 2, 0"
// 126235 is the smallest number gotten by taking 1 at index 2 and putting it at index 0

let smallest = (n) => {
    const result = [];
    const intArray = ('' + n).split('');
    const sortArray = ('' + n).split('').sort();
    const removingZeros = intArray.filter(x => x !== '0');
    if (removingZeros.length === ('' + n).split('').length) {
      const smallestNum = sortArray[0];
      const index = intArray.indexOf(smallestNum);
      const position = sortArray.indexOf(smallestNum);
      let newInt = intArray;
      newInt.splice(index, 1);
      newInt.unshift(smallestNum);
      newInt = parseInt(newInt.join(''));
      result.push(newInt, index, position);
      return result;
    } else if (removingZeros.length === 5) {
      const smallestNum = removingZeros[0];
      const index = removingZeros.indexOf(smallestNum);
      const position = intArray.indexOf('0');
      newInt = parseInt(removingZeros.join(''));
      result.push(newInt, index, position);
      return result;
    } else {
      const position = 7 - removingZeros.length;
      const smallestNum = removingZeros[0];
      const index = removingZeros.indexOf(smallestNum);
      newInt = parseInt(removingZeros.join(''));
      result.push(newInt, index, position);
      return result;
    }
}

smallest(209917)

module.exports = smallest
