// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
//
// 'abba' & 'baab' == true
//
// 'abba' & 'bbaa' == true
//
// 'abba' & 'abbba' == false
//
// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
//
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
//
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
//
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

let  anagrams = (word, words) => {
  let res = []
  let arr = word.split('').sort().join('');
  let arr2 = words.map(x => x.split('').sort().join('')).map(x => x === arr)
  for(i=0;i<arr2.length;i++) {
    if(arr2[i] === true) {
      res.push(words[i])
    }
  }
  return res;
}

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])

module.exports = anagrams
