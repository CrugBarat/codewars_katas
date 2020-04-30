// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
//
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway ! .map(x => x.slice(1)).map(x => x += 'ay')

let pigIt = (str) => {
  if (str.charAt(str.length-1) !== '!' && str.charAt(str.length-1) !== '?') {
    return str.split(' ').map(x => x.slice(1)).map((e, i) => e + str.split(' ').map(x => x.charAt(0) + 'ay')[i]).join(' ');
  } else {
    let char = str.slice(-1);
    let newStr = str.substring(0, str.length-1);
    let newArray = newStr.split(' ');
    newArray.pop()
    return newArray.map(x => x.slice(1)).map((e, i) => e + newStr.split(' ').map(x => x.charAt(0) + 'ay')[i]).join(' ') + " " + char;
  }
}

module.exports = pigIt;

pigIt('O tempora o mores !')
